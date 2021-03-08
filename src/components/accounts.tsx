const accounts = [
  {
    text: 'GitHub',
    link: 'https://github.com/toshi-toma',
  },
  {
    text: 'Blog',
    link: '/memo',
  },
  {
    text: 'はてなブログ',
    link: 'https://toshi-toma.hatenablog.com/',
  },
  {
    text: 'Qiita',
    link: 'https://qiita.com/toshi-toma',
  },
  {
    text: 'npm',
    link: 'https://www.npmjs.com/~toshi-toma',
  },
  {
    text: 'Zenn',
    link: 'https://zenn.dev/toshitoma',
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/toshi__toma',
  },
  {
    text: 'Slides',
    link: 'https://speakerdeck.com/10shi10ma',
  },
]

export default () => (
  <div className="accounts-container">
    <h3 className="accounts-header">Accounts</h3>
    <div className="accounts">
      {accounts.map(({ text, link }) => (
        <div className="feature" key={text}>
          <h4>{link ? <a href={link}>{text}</a> : text}</h4>
        </div>
      ))}
    </div>
  </div>
)
