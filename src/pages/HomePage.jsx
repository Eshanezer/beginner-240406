import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobsButton from '../components/ViewAllJobsButton';

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListings isHome={true}/>
            <ViewAllJobsButton />
        </>
    )
}

export default HomePage
