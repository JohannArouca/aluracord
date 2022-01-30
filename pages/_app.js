function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 10px;             
        }
        
        ::-webkit-scrollbar-track {
          background:#212931;
          border-radius: 10px;       
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #066D89;   
          border-radius: 10px;      
          border: 2px solid #181F25; 
        }

        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}