import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingPage from './BookingPage';

function App() {
    


    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                        <Header />
                            <Hero />
                            <Specials />
                            <Testimonials />
                            <About />
                            <Footer />
                        </>
                    }
                />
                <Route path="/booking-a-table" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
