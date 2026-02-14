"use client";

import React from 'react';
import Image from 'next/image';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useDonation } from '@/context/DonationContext';
import Button from '../ui/Button';

const GET_CAUSES = gql`
  query GetCauses {
    posts(first: 3) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const Causes = () => {
  const { openModal } = useDonation();
  const { loading, error, data } = useQuery(GET_CAUSES);

  if (loading) return (
    <div className="py-20 text-center">
      <div className="animate-spin w-10 h-10 border-4 border-secondary border-t-transparent rounded-full mx-auto mb-4"></div>
      <p className="text-slate-400 font-medium">Loading verified causes...</p>
    </div>
  );

  if (error) return (
    <div className="py-20 text-center text-slate-400">
      <p>Unable to load live causes. Please check your WordPress connection.</p>
    </div>
  );

  const posts = data?.posts?.nodes || [];

  return (
    <section id="causes" className="py-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 bg-white">
              <Image 
                src={post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"} 
                alt={post.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-3 font-serif leading-tight">{post.title}</h3>
                <div 
                  className="text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Button variant="secondary" className="w-full" onClick={openModal}>
                  Support This Cause
                </Button>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">No live causes found. Add some in your WordPress dashboard!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Causes;
