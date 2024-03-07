import AllBlocksPagination from "../components/AllBlocksPagination"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const AllBlocks = () => {
    return (
        <>
            <div className="main-container w-container mb-20">
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
                <div className="mt-5">
                    <AllBlocksPagination />
                </div>
            </div>
            <Footer />
        </>
    )
}