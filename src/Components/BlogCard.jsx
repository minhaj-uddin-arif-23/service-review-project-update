import { Card, Button } from 'flowbite-react';

const blogPosts = [
  { title: "Service Review: Best Tech Gadgets of 2023", description: "In-depth reviews of the top tech gadgets released this year." },
  { title: "Customer Experience: Local Restaurants Review", description: "Honest reviews from customers about local dining experiences." },
  { title: "Top-Rated Streaming Services in 2023", description: "We compare the best streaming services based on customer ratings." },
  { title: "Ultimate Guide: Smartphone Comparisons 2023", description: "A detailed comparison of the latest smartphones on the market." },
  { title: "Review: Most Reliable Online Shopping Platforms", description: "Customer feedback on the best online shopping platforms and their services." },
  { title: "The Best Home Appliances for Modern Living", description: "Discover the top home appliances that can make your life easier." },
  { title: "Fitness Equipment Review: Best Gear for Home Workouts", description: "A review of the best fitness equipment for home gyms." },
  { title: "Top 5 Travel Booking Websites You Should Use", description: "Our guide to the most reliable and user-friendly travel booking platforms." },
  { title: "Customer Insights: Best Mobile Payment Solutions", description: "Exploring the best mobile payment apps based on customer experience." },
  { title: "Tech Review: The Future of Electric Vehicles", description: "We review the latest electric vehicles and what the future holds for the EV market." },
  { title: "Service Review: The Best Cloud Storage Providers in 2023", description: "Comparing the top cloud storage services available this year." },
  { title: "Customer Review: Top E-Learning Platforms in 2023", description: "A deep dive into the best online learning platforms for students and professionals." },
  { title: "Review of the Most Popular Smart Home Devices", description: "Which smart home devices offer the best value for money in 2023?" },
  { title: "The Best Meal Kit Delivery Services for Busy People", description: "Customer experiences with meal kit services that bring convenience to your kitchen." },
  { title: "Best Streaming Music Services for 2023", description: "Reviewing the top music streaming services based on content and features." }
];

const BlogCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Latest Service Reviews</h2>
        <Button className="ml-auto text-red-600">See More</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {blogPosts.map((post, index) => (
          <Card key={index} className="max-w-sm mb-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {post.description}
            </p>
            <Button className='text-sky-700'>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4 text-sky-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
