import '@styles/globals.css';

export const metadata = {
  title: 'myPrompts',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;