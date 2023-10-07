import BlogCard from "./BlogCard";


const blogData = [
    {
        id: 1,
        title: 'Mastering the Art of Event Budgeting',
        description: 'Dive into the world of event budgeting and learn essential tips and strategies to efficiently manage your educational event finances. From cost-saving techniques to effective resource allocation, this blog will empower you to make the most of your budget.',
        img: 'https://i.ibb.co/8DvZC4r/blog1.jpg'
    },
    {
        id: 1,
        title: 'Harnessing Technology for Seamless Event Registration',
        description: 'Explore the latest tech trends and tools that can streamline the event registration process. Discover how to leverage online platforms and software solutions to simplify attendee sign-ups and enhance the overall registration experience for your educational events.',
        img: 'https://i.ibb.co/K2VcrpT/blog2.jpg'
    },
    {
        id: 1,
        title: 'The Power of Engaging Content in Educational Events',
        description: 'Content is king, even in educational event management. This blog unpacks the significance of engaging content for your events, from captivating presentations to interactive workshops. Learn how to craft content that resonates with your audience and ensures a memorable learning experience.',
        img: 'https://i.ibb.co/BgPjx3L/blog3.jpg'
    }
]


const Blog = () => {
    return (
       <div className="max-w-[1440px] h-[65vh] mx-auto my-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                blogData.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
       </div>
    );
};

export default Blog;