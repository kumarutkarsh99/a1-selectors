import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="min-h-screen pt-7 px-7 font-sans bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h4 className="mt-2">A1 Selectors</h4>
        <Link to="/" className="login-button px-6 py-2 rounded-2xl text-center bg-teal-600 cursor-pointer">
          Login
        </Link>

      </div>

      {/* Tagline */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Where Great Companies Meet Great Candidates
        </h1>
        <p className="text-xl text-gray-700">
          A1 Selectors connects job seekers and employers through a seamless,
          smart, and intuitive platform. Whether you're hiring top talent or
          searching for your next opportunity, we make it effortless and tailored
          to your goals.
        </p>
      </div>

      {/* Bootstrap Carousel */}
      <div class="wrapper">
      <div class="background bg-teal-600"></div>
      <div className="foreground bg-black rounded-xl max-w-4xl mx-auto mt-16">
        <div
          id="carouselExampleRide"
          className="carousel slide overflow-hidden"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img1.jpeg"
                className="d-block w-100"
                alt="Slide 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img2.jpg"
                className="d-block w-100"
                alt="Slide 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img1.jpg"
                className="d-block w-100"
                alt="Slide 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>

      <div className="mt-20 mb-4 ">
        <h1 className="flex justify-center">How A1 Selectors can help you?</h1>
        <p className="flex justify-center mt-4 text-xl text-gray-700">Our comprehensive suite of progressive solutions cover a range of staffing solutions</p>
      </div>
      <div className="flex flfex-wrap gap-4 p-4">
        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="h-64">
          <img
            src="img4.jpg"
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 bg-teal-600 text-white">
          <h2 className="text-xl font-semibold mb-2">For Employers</h2>
          <p className="text-white text-sm">
            Our staffing experts will work with you closely to not just recruit employees but to build 
            assets that help organizations to reach new heights. Our unique sourcing methodology sets us
             apart as top placement consultants.
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="h-64">
          <img
            src="img5.jpeg"
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 bg-teal-600 text-white">
          <h2 className="text-xl font-semibold mb-2">For Candidates</h2>
          <p className="text-white text-sm">
            We believe in harnessing job seekers career ambitions and their strengths to help nurture the 
            dreams of millions across India. Our network of reputed companies benefits the candidates to 
            fulfil their career aspirations.
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="h-64">
          <img
            src="img6.jpg"
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 bg-teal-600 text-white">
          <h2 className="text-xl font-semibold mb-2">Search Process</h2>
          <p className="text-white text-sm">
            Being the leader in HR recruitment and placement consulting, we inherent a unique concept 
            of multi-step sourcing of candidates. We ensure happiness for both employers and candidates 
            by acting as a bridge to find each other.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;
