import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import SEO from '../components/seo';

const Index = () => (
	<Layout>
		<SEO title="Tanmu Project Management" />
		<section className="pt-20 md:pt-40">
			<div className="container mx-auto px-8 lg:flex">
				<div className="text-center lg:text-left lg:w-1/2">
					<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">TANMU</h1>
					<p className="text-xl lg:text-2xl mt-6 font-light">Project Management Services</p>
				</div>
				<div className="lg:w-1/2">
					<HeroImage />
				</div>
			</div>
		</section>
		<section id="features" className="py-20 lg:pb-40 lg:pt-48">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl lg:text-5xl font-semibold">Services we offer</h2>
				<p className="mt-8 text-xl font-light leading-relaxed">
					We provide a wide range of project management services and lead projects from concept to completion.
					During this journey, we provide services, assistance and advice to the project owners in:{' '}
				</p>
				<div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
					<div className="flex-1 px-3">
						<Card className="mb-8">
							<p className="font-semibold text-xl">Conceptualisation Stage</p>
							<p className="mt-4">
								<ul>
									<li>Owner's Representation</li>
									<li>Feasability</li>
									<li>Conceptual Design</li>
									<li>Design Standards</li>
									<li>Cost Estimating</li>
									<li>Project Team Selection</li>
									<li>Funding Documents</li>
								</ul>
							</p>
						</Card>
					</div>
					<div className="flex-1 px-3">
						<Card className="mb-8">
							<p className="font-semibold text-xl">Creation Stage</p>
							<p className="mt-4">
								<ul>
									<li>Owner's Representation</li>
									<li>Design Development</li>
									<li>Technical Direction</li>
									<li>Energy Optimisation</li>
									<li>Vendor Selection</li>
									<li>Review of Compliance</li>
									<li>Technical Integration</li>
								</ul>
							</p>
						</Card>
					</div>
					<div className="flex-1 px-3">
						<Card className="mb-8">
							<p className="font-semibold text-xl">Execution Stage</p>
							<p className="mt-4">
								<ul>
									<li>Owner's Representation</li>
									<li>Project Management</li>
									<li>Procurement</li>
									<li>FF&E and OSE</li>
									<li>Quality Monitoring</li>
									<li>Testung & Commissioning</li>
									<li>Handover Documentation</li>
								</ul>
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
					<h3 className="text-3xl font-semibold leading-tight">
						COURTYARD BY MARRIOTT AT DUBAI CULTURE VILLAGE - DUBAI, UAE.
					</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						<p>168 Rooms 4 Star Property Managed by Marriott International.</p>
						<p>
							Tanmu Project Management Services has been appointed by MFK Trading FZE to act as the Client
							Representative especially for the Electromechanical Services and hotel operator liaisons.
							During the execution, the Client added additional work to our scope of services like
							Procurement Management, Cash Flow, Cost Control and FF&E/OSE.
						</p>
						<p>
							The project has been successfully completed and handed over to the operator Marriott
							International
						</p>
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<SplitSection
			reverseOrder
			primarySlot={
				<div className="lg:pl-32 xl:pl-48">
					<h3 className="text-3xl font-semibold leading-tight">MARRIOTT HOTEL AT AL JADDAF - DUBAI, UAE.</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						<p>
							1 Million Square Feet BUA, 352 Rooms, 7 F&B Outlets 5 Star Property Managed by Marriott
							International
						</p>
						<p>
							The principal of Tanmu Project Management Services act as the Client Representative and
							managed the entire process from the concept development stage to the project handing over to
							the Operator Marriott International.{' '}
						</p>
						<p>The project has been successfully completed in 2014. </p>
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<SplitSection
			primarySlot={
				<div className="lg:pr-32 xl:pr-48">
					<h3 className="text-3xl font-semibold leading-tight">
						MARRIOTT EXECUTIVE APARTMENTS AT AL JADDAF - DUBAI, UAE.
					</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						<p>128 Deluxe Apartment Property Managed by Marriott International.</p>
						<p>
							The principal of Tanmu Project Management Services act as the Client Representative managed
							the entire process from the concept development stage to the project handing over to the
							Operator Marriott International.{' '}
						</p>
						<p>The project has been successfully completed in 2014.</p>
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<SplitSection
			primarySlot={
				<div className="lg:pr-32 xl:pr-48">
					<h3 className="text-3xl font-semibold leading-tight">
						MARRIOTT STAFF ACCOMMODATION BUILDING- DUBAILAND, UAE.
					</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						<p>114 Apartment Property Managed by Marriott International.</p>
						<p>
							The principal of Tanmu Project Management Services act as the Client Representative and
							managed the entire process from the concept development stage to the project handing over to
							the Operator Marriott International.
						</p>
						<p>The project has been successfully completed in 2016.</p>
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<section id="stats" className="py-20 lg:pt-32">
			<div className="container mx-auto text-center">
				<LabelText className="text-gray-600">Our customers get results</LabelText>
				<div className="flex flex-col sm:flex-row mt-8 lg:px-24">
					<div className="w-full sm:w-1/3">
						<StatsBox primaryText="+100%" secondaryText="Stats Information" />
					</div>
					<div className="w-full sm:w-1/3">
						<StatsBox primaryText="+100%" secondaryText="Stats Information" />
					</div>
					<div className="w-full sm:w-1/3">
						<StatsBox primaryText="+100%" secondaryText="Stats Information" />
					</div>
				</div>
			</div>
		</section>
		<section id="testimonials" className="py-20 lg:py-40">
			<div className="container mx-auto">
				<LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
				<div className="flex flex-col md:flex-row md:-mx-3">
					{customerData.map((customer) => (
						<div key={customer.customerName} className="flex-1 px-3">
							<CustomerCard customer={customer} />
						</div>
					))}
				</div>
			</div>
		</section>
		<section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
			<h3 className="text-5xl font-semibold">Experience world class project management</h3>
			<p className="mt-8 text-xl font-light">Get in touch with us today!</p>
			<p className="mt-8">
				<Button size="xl">Get Started Now</Button>
			</p>
		</section>
	</Layout>
);

export default Index;
