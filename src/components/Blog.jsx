import React from 'react';
import '../styles/Blog.css'// Ensure the CSS file exists


//Images imports
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import blog4 from '../assets/blog4.webp'
import blog5 from '../assets/blog5.webp'
import blog6 from '../assets/blog6.webp'

const blogPosts = [
    {
        id: 1,
        date: "July 18, 2021",
        title: "Sed magna dui, dignissim id felis vitae, consectetur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog1
    },
    {
        id: 2,
        date: "July 18, 2021",
        title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog2
    },
    {
        id: 3,
        date: "July 18, 2021",
        title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog3
    },
    {
        id: 4,
        date: "July 18, 2021",
        title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog4
    },
    {
        id: 5,
        date: "July 18, 2021",
        title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog5
    },
    {
        id: 6,
        date: "July 18, 2021",
        title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
        image: blog6
    }
];

export default function BlogGrid() {
    return (
        <div>
            <h1 className="bloga-h">Blog</h1>
        <div className="blog-container">
            {blogPosts.map((post) => (
                <div className="blog-card" key={post.id}>
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <p className="blog-date">{post.date}</p>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-description">{post.description}</p>
                    <a href="#" className="blog-readmore">Read more</a>
                </div>
            ))}
        </div>
        </div>
    );
}