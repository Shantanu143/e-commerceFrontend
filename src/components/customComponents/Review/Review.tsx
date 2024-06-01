import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Ensure this path is correct

interface ReviewType {
  name: string;
  imageUrl: string;
  review: string;
  rating: string;
}

const Review: React.FC = () => {
  const reviews: ReviewType[] = [
    {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Lorem ipsum dolor sit amet...",
      rating: "5.0",
    },
    {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Lorem ipsum dolor sit amet...",
      rating: "5.0",
    },
    {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Lorem ipsum dolor sit amet...",
      rating: "5.0",
    },
    {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Lorem ipsum dolor sit amet...",
      rating: "5.0",
    },
    {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Lorem ipsum dolor sit amet...",
      rating: "5.0",
    },
    {
      name: "John Smith",
      imageUrl: "https://example.com/user2.jpg",
      review: "Consectetur adipiscing elit...",
      rating: "4.5",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://example.com/user3.jpg",
      review: "Sed do eiusmod tempor incididunt...",
      rating: "4.0",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://example.com/user3.jpg",
      review: "Sed do eiusmod tempor incididunt...",
      rating: "4.0",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://example.com/user3.jpg",
      review: "Sed do eiusmod tempor incididunt...",
      rating: "4.0",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://example.com/user3.jpg",
      review: "Sed do eiusmod tempor incididunt...",
      rating: "4.0",
    },
    // Add more reviews as needed
  ];

  return (
    <section className="text-gray-600 body-font">
       <h2 className="text-4xl font-bold text-center mb-8 text-gray-600">
        Customer <span className="text-blue-500 dark:text-blue-500">Reviews</span>
      </h2>
      <div className="container text-center px-5 py-24 mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {reviews.map((data, index) => (
            <SwiperSlide key={index}>
              <Card>
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover mt-2 object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={data.imageUrl}
                />
                <CardHeader>
                  <CardTitle>{data.name}</CardTitle>
                  <CardDescription>{data.review}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{data.rating}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
