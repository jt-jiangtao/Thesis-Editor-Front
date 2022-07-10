import styles from '@/styles/graduation-template/headers/headers.module.scss'
import { CloudSyncOutlined, EllipsisOutlined } from '@ant-design/icons'
import classNames from 'classnames'

export default function Headers(){
  return (
    <div className={styles['headers']}>
      <div className={styles['tool-menu']}>
        <div className={styles['tools']}>
          <div className={classNames(styles['tool'], 'hover-gray')}>文档</div>
          <div className={classNames(styles['tool'], 'hover-gray')}>插入</div>
          <div className={classNames(styles['tool'], 'hover-gray')}>格式</div>
          <div className={classNames(styles['tool'], 'hover-gray')}>布局</div>
          <div className={classNames(styles['tool'], 'hover-gray')}>视图</div>
          <div className={classNames(styles['tool'], 'hover-gray')}>工具</div>
        </div>
        <div className={classNames(styles['save-info'], 'hover-gray')}>
          <CloudSyncOutlined />
          <span className={styles['save-status']}>已保存</span>
        </div>
      </div>
      <div className={styles['doc-name']}>
        <span>毕业设计论文</span>
      </div>
      <div className={styles['user-menu']}>
        <div className={styles['user-container']}>
          <span className={styles['username']}>涛</span>
        </div>
        <div className={styles['more-container']}>
          <span className={classNames(styles['more'], 'hover-gray')}>
            <EllipsisOutlined />
          </span>
        </div>
      </div>
    </div>
  )
}
