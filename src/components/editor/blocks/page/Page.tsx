import styles from './page.module.scss'
import { RenderElementProps } from 'slate-react'

export default function Page(props : RenderElementProps){
  return (
    <div
      className={styles['page']}
      data-my-element={true}
      data-blocks-page={true}
      {...props.attributes}
    >
      <div className={styles['page-top']}>
        <div className={styles['desc']}/>
      </div>
      <div className={styles['page-content']}>
        {props.children}
      </div>
      <div className={styles['page-bottom']}>
        <div className={styles['desc']}/>
      </div>
    </div>
  )
}
