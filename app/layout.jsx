import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata={
    title:"PromptMe",
    description:'Discover & Share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <Provider>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
        </Provider>   
    </html>
    // <div>layout</div>
  )
}

export default Rootlayout