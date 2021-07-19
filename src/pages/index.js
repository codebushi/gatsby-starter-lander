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

const Index = () => (
	<Layout>
		<section className="pt-20 md:pt-40">
			<div className="container mx-auto px-8 lg:flex">
				<div className="text-center lg:text-left lg:w-1/2">
					<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Tanmu</h1>
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
								An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna
								vitae auctor integer.
							</p>
						</Card>
					</div>
					<div className="flex-1 px-3">
						<Card className="mb-8">
							<p className="font-semibold text-xl">Creation Stage</p>
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
							<p className="font-semibold text-xl">Execution Stage</p>
							<p className="mt-4">
								An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna
								vitae auctor integer.
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
						168 Rooms 4 Star Property Managed by Marriott International. Tanmu Project Management Services
						has been appointed by MFK Trading FZE to act as the Client Representative especially for the
						Electromechanical Services and hotel operator liaisons. During the execution, the Client added
						additional work to our scope of services like Procurement Management, Cash Flow, Cost Control
						and FF&E/OSE. The project has been successfully completed and handed over to the operator
						Marriott International
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<SplitSection
			reverseOrder
			primarySlot={
				<div className="lg:pl-32 xl:pl-48">
					<h3 className="text-3xl font-semibold leading-tight">Design And Plan Your Business Growth Steps</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						Once the market analysis process is completed our staff will search for opportunities that are
						in reach
					</p>
				</div>
			}
			secondarySlot={<SvgCharts />}
		/>
		<SplitSection
			primarySlot={
				<div className="lg:pr-32 xl:pr-48">
					<h3 className="text-3xl font-semibold leading-tight">Search For Performance Optimization</h3>
					<p className="mt-8 text-xl font-light leading-relaxed">
						With all the information in place you will be presented with an action plan that your company
						needs to follow
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
			<h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
			<p className="mt-8 text-xl font-light">
				Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
			</p>
			<p className="mt-8">
				<Button size="xl">Get Started Now</Button>
			</p>
		</section>
	</Layout>
);

export default Index;
