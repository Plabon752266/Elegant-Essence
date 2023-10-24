const BrandSection = () => {
    return (
        <div className="mt-8">
            <h1 className="text-4xl font-bold text-center">Available Brands</h1>
            <div className="mt-5 grid grid-cols-3 gap-5">
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src={'/loreal.jpg'} alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black">L Oréal</h2>
                    </div>
                </div>
                
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src={'/Estee.jpg'} alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black">Estée Lauder</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src={'/chanel.jpg'} alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black"> Chanel, Dior</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src='https://i.ibb.co/0jc8K7T/urban.jpg' alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black">Urban Decay</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src={'/pg.jpg'} alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black">Procter & Gamble</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#F5F2F2]  shadow-xl image-full">
                    <figure><img src={'/revlon.jpg'} alt="Shoes" /></figure>
                    <div className="card-body  flex justify-center items-center bg-[#F5F2F2] opacity-50  ">
                        <h2 className="card-title text-black">Revlon</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrandSection;
