import Header from '../components/header'
import Accounts from '../components/accounts'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header title="Home" />
    <div className={sharedStyles.layout}>
      <h1>toshi-toma.com</h1>
      <h2>👨‍💻 + 🍅 + 🍊</h2>
      <img src="/avatar-circle.png" width="240px" height="240px" />
      <Accounts />
    </div>
  </>
)
