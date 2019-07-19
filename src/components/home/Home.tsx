import React from 'react'
import { notification } from 'antd'
import styles from './Home.module.scss'

// import gStyles from '../../styles/colors.module.scss'
import Gloal from "../../commoner/conster.js"

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
class App extends React.Component<{}> {
  private openNotification = () => {
    notification.open({
      message: 'Hi~~~',
      description: 'Ah Ha',
    })
  }

  public render() {
    return (
      <div className={styles.App}>
        <div className={styles.mysass}>
          <ul className={styles.navul}>
            <li>大连</li>
            <li>沈阳</li>
            <li>青岛</li>
          </ul>
          {Gloal.website}<br></br>
          {mySum(1, 6)}
        </div>
      </div>
    )
  }
}

export default App
