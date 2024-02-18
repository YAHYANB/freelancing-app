import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide"
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import GigCard from "../../components/gigCard/GigCard"
import { cards, projects, gigs } from "../../data"
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineStart } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="explore">
        <div className="container">
          <h1>Browse services by category​</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <h2>Graphics & Design</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <h2>Digital Marketing</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <h2>Writing & Translation</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <h2>Video & Animation</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <h2>Music & Audio</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <h2>Programming & Tech</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <h2>Business</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <h2>Lifestyle</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <h2>Data</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <h2>Photography</h2>
              <div className="line"></div>
              <span>Software Engineer, Web / Mobile Developer & More</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="trends">
          <div className="title">
            <h1>Trending Services</h1>
            <span>Most viewed and all-time top-selling services</span>
          </div>
          <Slide>
            {gigs.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Slide>
        </div>
        <div className="done">
          <div className="title">
            <h1>Need something done?</h1>
            <span>Most viewed and all-time top-selling services</span>
          </div>
          <div className="items">
            <div className="item">
              <img src="job.png" />
              <h2>Post a job</h2>
              <span>It’s free and easy to post a job. Simply fill in a title, description.</span>
            </div>
            <div className="item">
              <img src="freelance.png" />
              <h2>Choose freelancers</h2>
              <span>It’s free and easy to post a job. Simply fill in a title, description.</span>
            </div>
            <div className="item">
              <img src="paiment.png" />
              <h2>Pay safely</h2>
              <span>It’s free and easy to post a job. Simply fill in a title, description.</span>
            </div>
            <div className="item">
              <img src="help.png" />
              <h2>We’re here to help</h2>
              <span>It’s free and easy to post a job. Simply fill in a title, description.
              </span>
            </div>
          </div>
        </div>
        <div className="start">
          
        <img src="get-start.png"/>
          <div className="items">
            <h1>Join World's Best Marketplace for Workers</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="item">
              <div className="mini-item"><MdDone/><span>Connect to freelancers with proven business experience</span></div>
              <div className="mini-item"><MdDone/><span>Get matched with the perfect talent by a customer success manager</span></div>
              <div className="mini-item"><MdDone/><span>Unmatched quality of remote, hybrid, and flexible jobs</span></div>
            </div>
            {/* <div> */}
            <Link to='/' className="get-start">Get Started</Link>
            {/* </div> */}
          </div>
        </div>

        <div className="end">
          <div className="items">
            <h1>Find the talent needed to get your business growing.</h1>
            <span>Advertise your jobs to millions of monthly users and search 15.8 million CVs</span>
            <div>
            <Link className="get-start">Get Started</Link>
            </div>
          </div>
          <img src="blob.jpeg"/>
        </div>
        {/* <Slide slidesToShow={4} arrowsScroll={3}>
            {cards.map((card) => (
              <CatCard key={card.id} card={card} />
            ))}
          </Slide> */}
            
      {/* <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div> */}
      {/* <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      {/* */}
    </div>
    </div>
  );
}

export default Home;
