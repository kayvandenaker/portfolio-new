// ffmpeg -i input.mp4 -vframes 1 -vf "scale=640:480" output.jpeg

export default {
  gridItems: [
    {
      title: "Intentional Spaces (WIP)",
      partner: "Archetype AI",
      info: "Thesis with Archetype AI",
      date: "Ongoing",
      media: ["./media/thumbnails/thesis_binoculars_thumbnail.mp4", "./media/thumbnails/thesis_stethoscope_thumbnail.mp4", "./media/thumbnails/thesis_imu_thumbnail.mp4", "./media/thumbnails/thesis_haptics_thumbnail.mp4"],
      link: "thesis",
      poster: "./media/archetype_banner_big.png"
    },
    {
      title: "Tech Explorations",
      // partner: "-",
      info: "Side Projects",
      date: "Ongoing",
      media: ["./media/gpt_heart_square.jpg", "./media/thumbnails/timer_thumbnail.mp4", "./media/head.png", "./media/thumbnails/lines_thumbnail.mp4", "./media/thumbnails/colors_thumbnail.mp4", "./media/thumbnails/cupra_thumbnail.mp4", "./media/thumbnails/kinect_thumbnail.mp4", "./media/midi.jpg"],
      link: "side-projects",
      poster: "./media/gpt_heart_square.jpg"
    },
    {
      title: "Hapticlabs Demos",
      partner: "Hapticlabs",
      info: "Freelance",
      date: "2023",
      media: ["./media/thumbnails/hapticlabs_unity_thumbnail.mp4", "./media/hapticlabs_conference.jpg", "./media/thumbnails/hapticlabs_touchdesigner_thumbnail.mp4", "./media/thumbnails/hapticlabs_arduino_thumbnail.mp4", "./media/thumbnails/hapticlabs_protopie_thumbnail.mp4", "./media/thumbnails/hapticlabs_m5_thumbnail.mp4"],
      link: "hapticlabs",
      poster: "./media/hapticlabs_unity_poster.jpeg"
    },
    {
      title: "ProtoPie Demos",
      partner: "ProtoPie",
      info: "Freelance",
      date: "2023",
      src: "./media/protopie_laundry_small.mp4",
      media: ["./media/thumbnails/protopie_laundry_thumbnail.mp4", "./media/thumbnails/protopie_json_thumbnail.mp4", "./media/thumbnails/protopie_dslr_thumbnail.mp4", "./media/thumbnails/protopie_adas_thumbnail.mp4"],
      link: "protopie",
      poster: "./media/protopie_laundry_poster.jpg"
    },
    {
      title: "Tech Explorations",
      partner: "Above",
      info: "Internship at Above",
      date: "2022 – 2023",
      media: ["./media/thumbnails/uwb_thumbnail.mp4", "./media/thumbnails/touchbar_thumbnail.mp4", "./media/thumbnails/bodystorming_thumbnail.mp4", "./media/thumbnails/trackpad_thumbnail.mp4"],
      link: "above",
      poster: "./media/above_poster.png"
    },
    // {
    //   title: "Cupra Ferro",
    //   partner: "Cupra",
    //   info: "Sensorial interior experience",
    //   date: "2023",
    //   media: ["./media/cupra_driving_bw.mp4", "./media/cupra_autonomous_bw.mp4", "./media/cupra_ferro_1.mp4"],
    //   link: "cupra",
    // },
    {
      // title: "Tiles – Connecting with your music collection",
      title: "Tiles",
      // partner: "Umeå Institute of Design",
      info: "Case Study",
      date: "2022",
      media: ["./media/thumbnails/tiles_thumbnail.mp4", "./media/thumbnails/tiles_slider_thumbnail.mp4", "./media/tiles/process.jpeg", "./media/thumbnails/tiles_cue_thumbnail.mp4"],
      link: "tiles",
      poster: "./media/tiles_poster.jpg"
    },
    {
      // title: "Arch – Connecting remote doctors to their patients.",
      title: "Arch",
      // partner: "Umeå Institute of Design",
      info: "Case Study",
      date: "2021",
      media: ["./media/thumbnails/arch_thumbnail.mp4", "./media/thumbnails/archuxprototype_thumbnail.mp4", "./media/thumbnails/archinteraction_thumbnail.mp4", "./media/arch/setup.jpg"],
      link: "arch",
      poster: "./media/arch_poster.jpg"
    },
    // {
    //   title: "Design and Prototyping (NDA)",
    //   partner: "Arduino",
    //   info: "Junior Content Creator",
    //   date: "2022",
    //   src: "./media/bmw_small.mp4",
    //   poster: "./media/bmw_poster.jpg",
    //   link: "bmw",
    // },
    // {
    //   title: "Bespoke Digital Interior Concept (NDA)",
    //   partner: "Rolls-Royce Motor Cars",
    //   info: "Freelance",
    //   date: "2022",
    //   src: "./media/bmw_small.mp4",
    //   poster: "./media/bmw_poster.jpg",
    //   link: "bmw",
    // },
    {
      title: "BMW Vision i Circular",
      partner: "BMW Group",
      info: "Internship at BMW",
      date: "2021",
      media: ["./media/thumbnails/bmw_thumbnail.mp4", "./media/bmw/crystal.jpg", "./media/bmw/lamp.jpg", "./media/bmw/crystal_2.jpg"],
      link: "bmw",
      poster: "./media/bmw/bmw.jpg"
    },
  ],
};


// for f in *.mp4 ; do ffmpeg -i "$f" -vf scale=-1:480 "thumnail_$f" ;  done