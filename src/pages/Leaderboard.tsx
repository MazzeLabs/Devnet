import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import LeaderboardPagination from "../components/LeaderboardPagination"

export const Leaderboard = () => {
    return (
        <div>
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

                <div
                    className="mt-8 my-2 w-100 justify-center flex items-center rounded-md shadow-md" style={{ border: '1px solid #ffa2001f' }}>
                    <div>
                        <button
                            className="flex items-center rounded-l-md border border-white justify-center w-12 h-12 text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffa200" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-900">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>

                        </button>
                    </div>

                    <div className="  w-full">
                        <input type="search" x-model="input3"
                            className="w-full h-12 px-4 py-1 rounded-r-md border-none bg-transparent focus:outline-none"
                            placeholder="Search Address" />
                    </div>
                </div>

                <button className="cards p-4 wide-card flex justify-center items-center mt-10" tabIndex={0} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>

                    <div className="ms-2">Leaderboard</div>
                </button>

                <div className="mt-5">
                    <LeaderboardPagination />
                </div>
            </div>
            <Footer />
        </div>
    )
}