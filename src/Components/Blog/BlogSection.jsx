import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog posts data (replace with your API/CMS data)
const posts = [
  {
    id: 1,
    title: '6 Tips To Protect Your Mental Health When Sick',
    slug: 'protect-mental-health-when-sick',
    categories: ['Mental Health', 'Wellness'],
    author: 'Martin King',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop',
    excerpt:
      'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or...',
  },
  {
    id: 2,
    title: 'Unsure About Wearing A Face Mask? How And Why',
    slug: 'unsure-about-wearing-a-face-mask',
    categories: ['Infectious', 'Tips'],
    author: 'John Ezak',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop',
    excerpt:
      'That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or...',
  },
  {
    id: 3,
    title: 'Tips For Eating Healthy When Working From Home',
    slug: 'tips-for-eating-healthy-wfh',
    categories: ['Lifestyle', 'Nutrition'],
    author: 'Saul Wade',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=900&fit=crop',
    excerpt:
      'You’re on a conference call and somehow wandered into the kitchen. Next thing you know you’re eating crackers and dry cereal out of the box. Or...',
  },
  {
    id: 1,
    title: '6 Tips To Protect Your Mental Health When Sick',
    slug: 'protect-mental-health-when-sick',
    categories: ['Mental Health', 'Wellness'],
    author: 'Martin King',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop',
    excerpt:
      'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or...',
  },
  {
    id: 2,
    title: 'Unsure About Wearing A Face Mask? How And Why',
    slug: 'unsure-about-wearing-a-face-mask',
    categories: ['Infectious', 'Tips'],
    author: 'John Ezak',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=900&fit=crop',
    excerpt:
      'That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or...',
  },
  {
    id: 3,
    title: 'Tips For Eating Healthy When Working From Home',
    slug: 'tips-for-eating-healthy-wfh',
    categories: ['Lifestyle', 'Nutrition'],
    author: 'Saul Wade',
    date: '2021-01-20',
    cover:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=900&fit=crop',
    excerpt:
      'You’re on a conference call and somehow wandered into the kitchen. Next thing you know you’re eating crackers and dry cereal out of the box. Or...',
  },
];

// Utility: format date into {day, month, year}
const formatDate = (iso) => {
  const d = new Date(iso);
  const day = d.toLocaleDateString('en-GB', { day: '2-digit' });
  const month = d.toLocaleDateString('en-GB', { month: 'short' });
  const year = d.getFullYear();
  return { day, month, year };
};

const BlogHero = () => (
  <section
    className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center mt-35"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&h=900&fit=crop)',
    }}
  >
    <div className="absolute inset-0 bg-[#1B5FA3]/70"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Our Blog
      </h1>
      <div className="mt-6 flex items-center gap-2 text-white/90">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <span>›</span>
        <Link to="/doctors" className="hover:text-white">
          Doctors
        </Link>
        <span>›</span>
        <span className="text-white">Blog</span>
      </div>
    </div>
  </section>
);

const BlogCard = ({ post }) => {
  const { day, month, year } = formatDate(post.date);

  return (
    <article className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(27,95,163,0.12)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-md shadow-md px-3 py-2 text-center leading-none">
          <div className="text-[#1B5FA3] font-bold text-xl">{day}</div>
          <div className="text-gray-500 text-[11px] uppercase">{month}</div>
          <div className="text-gray-400 text-[11px]">{year}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-[13px] mb-3">
          {post.categories.map((c, idx) => (
            <Link
              key={c + idx}
              to={`/blog/category/${encodeURIComponent(c.toLowerCase())}`}
              className="text-[#1B5FA3] hover:text-[#1F9C9C] transition-colors"
            >
              {c}
              {idx < post.categories.length - 1 ? ',' : ''}
            </Link>
          ))}
          <span className="text-gray-400">•</span>
          <Link
            to={`/blog/author/${encodeURIComponent(
              post.author.toLowerCase().replace(/\s+/g, '-'),
            )}`}
            className="text-gray-500 hover:text-[#1B5FA3]"
          >
            {post.author}
          </Link>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#243b53] leading-snug hover:text-[#1B5FA3] transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="mt-6">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[#1B5FA3] font-semibold px-5 py-3 rounded-lg border border-[#1B5FA3]/20 hover:bg-[#1B5FA3]/5 transition-all"
          >
            <span className="inline-block w-4 h-0.5 bg-[#1B5FA3]"></span>
            Read More
          </Link>
        </div>
      </div>

      {/* Card outer soft shadow ellipse like the screenshot */}
      <div className="pointer-events-none absolute -z-10 -inset-8 rounded-[36px] shadow-[0_40px_120px_rgba(27,95,163,0.18)]"></div>
    </article>
  );
};

const BlogGrid = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
};

export default BlogSection;
