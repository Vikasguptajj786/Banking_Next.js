import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Vikas', lastName: 'Gupta', email:'vk5452564@gmail.com' };
    return(
        <section className="home">
        <div 
        className="home-content"
        >
            <header 
            className="home-header"
            >
                <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user= {loggedIn?.firstName || 'Guest'}
                        subtext='Access and Manage your account and transactions efficiently.'
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={(1)}
                totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50 }, {
            currentBalance: 500.50
        }]}
      />
        </section>
    )
}
export default Home