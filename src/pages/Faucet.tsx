import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Faucet = () => {
  return (
    <>
      <div className="main-container w-container">
        <Header />
        <div style={{ marginTop: '25px' }}>
          <input className="w-input" type="text"
            style={{
              width: '100%',
              padding: '22px 22px',
              fontSize: '14px',
              border: '1px solid #ffa2001f',
              color: 'white',
              backgroundColor: 'transparent'
            }}
            placeholder="Search Explorer"
          />
        </div>

        <div id="alert-1" className="cards flex items-center p-4 mb-4 text-white rounded-lg" role="alert">
          <h3 className="orange">Faucet</h3>
          <div className="ms-3 text-sm font-medium">
            Here you can claim 10 MAZZEs once per address.<br />
            Please complete the captcha and provide an address in the required field.
          </div>
          <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>

        <div
          className="mt-8 my-2 w-100 justify-center flex items-center rounded-md shadow-md" style={{ border: '1px solid #ffa2001f' }}>
          <div>
            <button
              className="flex items-center rounded-l-md border border-white justify-center w-12 h-12 text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="#ffa200"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          <div className="  w-full">
            <input type="search" x-model="input3"
              className="w-full h-12 px-4 py-1 rounded-r-md border-none bg-transparent focus:outline-none"
              placeholder="Address" />
          </div>
        </div>

        <button className="button wide-card w-inline-block flex justify-center items-center" tabIndex={0} type="button">
          <div className="me-2">Faucet</div>
          <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WaterDropOutlinedIcon" fill="black">
            <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2m-4.17-6c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12-.08-.45.28-.87.74-.87"></path>
          </svg>
        </button>

        <div style={{ height: '500px' }}>

        </div>
      </div >
      <Footer />
    </>
  )
}