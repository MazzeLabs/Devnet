import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import Map from "../components/Map"

export const Validators = () => {
  return (
    <div>
      <div className="main-container w-container">
        <Header />
        <div style={{ marginTop: '25px' }}>
          <input className="w-input" type="text"
            style={{
              width: '100%',
              padding: '22px 22px',
              fontSize: '18px',
              border: '1px solid #ffa2001f',
              color: 'white',
              backgroundColor: 'transparent'
            }}
            placeholder="Search Explorer"
          />
        </div>
        <Map />
      </div>
      <Footer />
    </div>
  )
}