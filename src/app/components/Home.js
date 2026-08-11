"use client";

import "../css/main.css";
import "../css/home.css";

import Link from 'next/link'
import Image from "next/image";
import { React, useEffect, useRef, useState, useCallback } from "react";
import GridItems from "../components/GridItems.js";

import useBetterMediaQuery from '../components/useBetterMediaQuery.js';

// Lazy loading component for media
function LazyMedia({ media, title, index, isSmall }) {
  const [isVisible, setIsVisible] = useState(isSmall);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  const markVisible = useCallback(() => {
    setIsVisible(true);
  }, []);

  const createObserver = useCallback(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible();
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '50px' } // Start loading slightly before visible
    );
  }, [markVisible]);

  useEffect(() => {
    if (isSmall) {
      return;
    }

    observerRef.current = createObserver();
    const container = containerRef.current;
    if (container && observerRef.current) {
      observerRef.current.observe(container);
    }

    return () => {
      if (container && observerRef.current) {
        observerRef.current.unobserve(container);
      }
    };
  }, [isSmall, createObserver]);

  const isVideo = typeof media === 'string' && media.endsWith("mp4");
  const visible = isSmall || isVisible;

  return (
    <div ref={containerRef}>
      {visible ? (
        isVideo ? (
          <video
            key={`video-${index}`}
            loop
            playsInline
            autoPlay
            muted
            preload="metadata"
            src={media}
            poster={media.replace(".mp4", "_poster.jpg")}
          />
        ) : (
          <Image
            key={`image-${index}`}
            src={media}
            alt={title}
            width={640}
            height={360}
            loading="lazy"
          />
        )
      ) : (
        // Placeholder while loading
        <div
          style={{
            width: '640px',
            height: '360px',
            background: '#f0f0f0'
          }}
        />
      )}
    </div>
  );
}

// Grid item component with optimized media loading
function GridItem({ item, index, isSmall, elementsRef }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const itemContainer = elementsRef.current[index];
    if (!isSmall && itemContainer) {
      itemContainer.scrollLeft = 0;
      setIsHovered(true);
    }
  }, [isSmall, elementsRef, index]);

  const handleMouseMove = useCallback((event) => {
    const itemContainer = elementsRef.current[index];
    if (!isSmall && isHovered && itemContainer) {
      itemContainer.scrollLeft += event.movementX * 5;
    }
  }, [isSmall, isHovered, elementsRef, index]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Link
      href={item.link}
      key={`link-to-${index}-${item.link}`}
      target={item.link.startsWith("http") ? "_blank" : undefined}
    >
      <div
        className="grid-item"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {!isSmall && (
          <div className="grid-row">
            <span className="grid-highlight">{item.title}</span>
            <span>{item.info}</span>
            <span>{item.date}</span>
          </div>
        )}

        {item.media && !isSmall ? (
          <div className="grid-media-container" ref={(el) => { elementsRef.current[index] = el; }}>
            {item.media.map((media, k) => (
              <LazyMedia
                key={`media-${index}-${k}`}
                media={media}
                title={item.title}
                index={`${index}-${k}`}
                isSmall={isSmall}
              />
            ))}
          </div>
        ) : (
          <div className="mobile-poster">
            <Image
              key={item.poster}
              src={item.poster}
              width={1920}
              height={1080}
              loading="lazy"
              alt={item.title}
            />
          </div>
        )}

        {isSmall && (
          <div className="grid-row">
            <span className="grid-highlight">{item.title}</span>
            <span>{item.info}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Home() {
  const isSmall = useBetterMediaQuery('(max-width: 760px)');
  const elementsRef = useRef([]);
  const [showProfilePic, setShowProfilePic] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("oldPage", "home");
  }, []);

  return (
    <div className="container">
      <div className="intro-wrapper">
        <div className="intro">
          <p>
            <b onMouseEnter={() => setShowProfilePic(true)} onMouseLeave={() => setShowProfilePic(false)}>Kay van den Aker</b>
            <br /><br />
            Designer and prototyper, exploring interactions that fuse digital and
            physical. Turning ambiguous ideas into experiences by gluing together
            various hard<span className="mobileText"> &</span>
            <span className="desktopText">- and</span> software.
            <br /><br />
            Currently working as Senior Creative Technologist at{' '}
            <a href='https://ai.google/' target="_blank" rel="noopener noreferrer">Google</a>. Previous public work is listed below, projects for{' '}
            <a href='https://modemworks.com/' target="_blank" rel="noopener noreferrer">Modem Works</a>,{' '}
            <a href='https://x.company/' target="_blank" rel="noopener noreferrer">Google X</a>,{' '}
            <a href='https://www.arduino.cc' target="_blank" rel="noopener noreferrer">Arduino</a>,{' '}
            <a href='https://www.rolls-roycemotorcars.com/' target="_blank" rel="noopener noreferrer">Rolls-Royce</a>,
            and others remain confidential.
            <br /><br />
            <span className="contact-container">
              <a className="link" href="mailto:kayvandenaker@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
              <a className="link" href="https://www.linkedin.com/in/kayvandenaker" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="link" href="https://www.instagram.com/aker.industries/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="link" href="https://twitter.com/kayvandenaker" target="_blank" rel="noopener noreferrer">X</a>
              <a className="link" href="./files/Kay_van_den_Aker.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </span>
          </p>
        </div>
        {!isSmall && <Image
          src="/media/profile.png"
          width={640}
          height={640}
          loading="lazy"
          style={{ opacity: showProfilePic ? 1 : 0 }}
          alt="Profile picture"
        />}
      </div>

      {!isSmall && (
        <div className="grid-row header">
          <span>Public work</span>
          <span>Context</span>
          <span>Date</span>
        </div>
      )}

      <div className="grid">
        {GridItems.gridItems.map((item, index) => (
          <GridItem
            key={`grid-item-${index}`}
            item={item}
            index={index}
            isSmall={isSmall}
            elementsRef={elementsRef}
          />
        ))}
      </div>
    </div>
  );
}
