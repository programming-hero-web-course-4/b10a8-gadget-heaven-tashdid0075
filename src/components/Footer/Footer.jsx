import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-zinc-600 p-10 text-center">

            <div className='mb-9 space-y-3'>
                <h3 className='text-3xl font-bold'>Gadget Heaven</h3>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='md:grid grid-cols-3'>
                <nav className='grid'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='grid'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='grid'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;