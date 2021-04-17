import React, { Fragment, useState } from 'react'
import style from './DragAndDrop.module.scss'
import { cn, fileSize } from 'core/utils/helpers'
import { Delete, InsertPhoto } from '@material-ui/icons'

interface DragAndDropProps {
  isMultiple?: boolean,
  handleFileDrop: (e: File[]) => void
}

const DragAndDrop = ({ isMultiple = false, handleFileDrop }: DragAndDropProps) => {
  const [ receivingFiles, setReceivingFiles ] = useState<boolean>(false)
  const [ selectedFiles, setSeletedFiles ] = useState<File[]>([])

  const {
    dragZone,
    dragZone__empty,
    dragZone__on,
    dragZone__filled,
    filled__file,
    file__info, bold
  } = style

  const handleOnDragEnter = (e: any) => {
    e.preventDefault()
    setReceivingFiles(true)
  }

  const handleOnDragOver = (e: any) => {
    e.preventDefault()
    setReceivingFiles(true)
  }

  const handleOnDragLeave = (e: any) => {
    e.preventDefault()
    setReceivingFiles(false)
  }

  const handleOnDrop = (e: any) => {
    e.preventDefault()

    setReceivingFiles(false)

    const files = e.dataTransfer.files

    if (files.length) {
      const newState = [ ...selectedFiles, ...files ]
      setSeletedFiles(newState)
      handleFileDrop(newState)
    }
  }


  const handleImageFile = (f: File) => {
    return URL.createObjectURL(f)
  }

  const removeImageFile = (f: File) => {
    const newSelectedFiles = selectedFiles.filter(file => file.name != f.name)
    setSeletedFiles(newSelectedFiles)
    handleFileDrop(newSelectedFiles)
  }

  return (
    <Fragment>
      <div
        data-testid="dropzone"
        onDrop={handleOnDrop}
        onDragEnter={handleOnDragEnter}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleOnDragOver}
        className={cn([
          receivingFiles ? cn([dragZone, dragZone__on]) : dragZone,
          selectedFiles.length > 0 ? dragZone__filled : dragZone__empty
        ])}
      >
        { selectedFiles.length > 0 ?
          selectedFiles.map((item, index) => {
            return (
              <div className={filled__file} key={index}>
                <img src={handleImageFile(item)} />
                <div className={file__info}>
                  <span> {item.name} </span>
                  <span className={bold}> {fileSize(item.size)} </span>
                  <span> {item.type} </span>
                </div>
                <Delete onClick={() => removeImageFile(item)}/>
              </div>
            )
          }) :
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <InsertPhoto style={{fontSize: '4rem'}}/>
            <span> Drag and drop files here </span>
          </div>
        }
      </div>
      <input
        type="file"
        style={{ display: 'none' }}
        multiple={ isMultiple }
      />
    </Fragment>
  )
}

export default DragAndDrop