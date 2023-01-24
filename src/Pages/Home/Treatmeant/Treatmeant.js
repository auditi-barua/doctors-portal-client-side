import React from 'react';
import treatmeant from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatmeant = () => {
    return (
        <div className="hero mt-32">
        <div className="hero-content flex-col lg:flex-row">
            <img src={treatmeant} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-black text-5xl font-bold py-6">Exceptional Dental Care ,on your Terms</h2>
                <p className="text-black py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    </div>
    );
};

export default Treatmeant;