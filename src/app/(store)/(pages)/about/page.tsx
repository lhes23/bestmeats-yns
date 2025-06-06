import React from "react";

const AboutPage = () => {
	return (
		<>
			<div id="about" className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						{/* <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg> */}

						<div className="pt-1"></div>

						<main className="mx-auto max-w-7xl px-4 sm:px-6">
							<div className="sm:text-center lg:text-left">
								<h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
									About Us
								</h2>
								<div className="my-6">
									<h3 className="text-xl font-bold">Passion for Wagyu, Delivered to Your Doorstep</h3>
									<p className="">
										Hello! I am a simple meat enthusiast dedicated to bringing the highest-quality Wagyu beef
										to the people of San Diego, California.
									</p>
									<p>
										My journey started with a love for exceptional cuts of meat and the desire to make premium
										Wagyu accessible to everyone, from home cooks to grill masters.{" "}
									</p>
								</div>
								<div className="my-6">
									<h3 className="text-xl font-bold">Fresh, Premium, and Hand-Selected</h3>
									<p>
										I personally source only the finest Wagyu beef, ensuring that every cut meets the highest
										standards of marbling, tenderness, and flavor. Whether you're looking for rich ribeye,
										melt-in-your-mouth filet, or premium ground Wagyu, I provide the best selections at
										competitive prices.{" "}
									</p>
								</div>

								<h3 className="text-xl font-bold">Convenient Delivery in San Diego </h3>

								<p>
									Enjoy restaurant-quality Wagyu without leaving your home. I offer reliable delivery services
									throughout San Diego, making it easy to savor top-tier beef at your convenience. Just place
									an order, and I’ll make sure it reaches you fresh and ready to cook.{" "}
								</p>

								<div className="my-6">
									<h3 className="text-xl font-bold">Let's Connect</h3>
									<p>
										If you have any questions about cuts, cooking tips, or special requests, feel free to
										reach out. I believe that great food brings people together, and I’m here to help you
										enjoy the best Wagyu experience possible. Thank you for supporting a local business and
										sharing in my passion for premium beef!
									</p>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="https://images.unsplash.com/photo-1694619033700-097d97b4c7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbiUyMGNvb2tpbmclMjBtZWF0fGVufDB8fDB8fHww"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
