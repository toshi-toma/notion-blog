const accounts = [
  {
    text: 'GitHub',
    link: '',
  },
  {
    text: 'Blog',
  },
  {
    text: 'Qiita',
  },
  {
    text: 'npm',
  },
  {
    text: 'Zenn',
  },
  {
    text: 'Twitter',
  },
  {
    text: 'Slides',
  },
  {
    text: '🐣',
  },
]

export default () => (
  <div className="accounts">
    {accounts.map(({ text }) => (
      <div className="feature" key={text}>
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
