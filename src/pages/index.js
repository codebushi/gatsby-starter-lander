import React from 'react';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Logo from '../svg/logo.svg';
import drywall1 from '../components/IMG_0524.jpg';
import drywall2 from '../components/IMG_0536.jpg';
import drywall3 from '../components/IMG_0545.jpg';
import Hero from '../../main.png';
import { css } from '@emotion/react';

// Tagged template literal styles:
const backgroundStyles = css`
  background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6), #eeeef3),
    url(${Hero});
  height: 700px;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

const white = css`
  background: white;
`;

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40" css={backgroundStyles}>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            For all your Drywall needs
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">Responsibilty, Respect, Honesty</p>

          <p className="mt-4 text-gray-600">Portland Metro Area and Surroundings</p>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sheetrock Installation</p>
              <p className="mt-4">
                From hanging sheetrock in a room or an entire home, weve got it covered. We can use
                any size sheetrock.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Drywall Taping</p>
              <p className="mt-4">
                We will make sure our work completes all requirements that meet all local fire and
                building codes. We can provide any finish level (0 to 5) you desire.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Patches and Texture</p>
              <p className="mt-4">
                We are available for patches of all sizes! We will match the texture that you
                already have on, so you cant even tell their was a patch there. If you are looking
                to retexture your entire house we can help. Choose from smooth finish, brocade,
                orange peel, etc.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">General Contractor</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            As a General Contractor, we can help with all types of construction work your home
            needs. We know the stress that comes with remodeling your home, let us take care of it.
          </p>
        </div>
      }
      secondarySlot={<img src={drywall1} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Sub-Contractors</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team is selective of chosing professional sub-contractors, we will work with both
            them and the clients to make sure the project is being done right and on time.
          </p>
        </div>
      }
      secondarySlot={<img src={drywall2} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Design And Plan Your Ideal Home</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team will work with you directly to assure you are getting the best work for your
            money.
          </p>
        </div>
      }
      secondarySlot={<img src={drywall3} />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/2">
            <StatsBox primaryText="98%" secondaryText="Customer Satisfaction" />
          </div>
          <div className="w-full sm:w-1/2">
            <StatsBox primaryText="32+" secondaryText="Projects done" />
          </div>
          <div className="w-full sm:w-1/2">
            <StatsBox primaryText="10+ Years" secondaryText="Experience" />
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
      style={{ backgroundColor: 'rgb(0 0 43)', color: 'white' }}
    >
      <h3 className="text-5xl font-semibold">Ready to create your ideal home? Get in touch! </h3>
      <p className="mt-8 text-xl font-light">
        <a style={{ color: 'whitesmoke' }} href="tel:5033271232">
          (503) 327 1232
        </a>
      </p>
      <p className="mt-8 text-xl font-light">
        <a href="Chelseapdxconstruction@gmail.com" style={{ color: 'whitesmoke' }}>
          Chelseapdxconstruction@gmail.com
        </a>
      </p>
    </section>
  </Layout>
);
