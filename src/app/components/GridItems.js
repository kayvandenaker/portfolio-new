// ffmpeg -i input.mp4 -vframes 1 -vf "scale=640:480" output.jpeg
// ffmpeg -i <input> -vframes 1 <output>.jpeg

// for file in *.mp4; do ffmpeg -i "$file" -vf "scale=iw*sar:ih,setsar=1" -vframes 1 -q:v 2 "${file%.mp4}_poster.jpg"; done

export default {
  gridItems: [
    {
      title: "On Movement Lab ↗",
      partner: "Modem Works",
      info: "Modem Works",
      date: "2025",
      media: ["/media/thumbnails/modem_thumbnail.mp4", "/media/thumbnails/modem_1.jpg", "/media/thumbnails/modem_3.jpg", "/media/thumbnails/modem_2.jpg"],
      link: "https://modemworks.com/projects/movement-lab-zurich/",
      poster: "/media/thumbnails/modem_2.jpg"
    },
    {
      title: "Intentional Spaces",
      partner: "Archetype AI",
      info: "Archetype AI",
      date: "2024",
      media: ["/media/thumbnails/thesis_sketch_thumbnail.mp4", "/media/thumbnails/thesis_binoculars_thumbnail.mp4", "/media/thumbnails/thesis_stethoscope_thumbnail.mp4", "/media/thumbnails/thesis_imu_thumbnail.mp4", "/media/thumbnails/thesis_haptics_thumbnail.mp4"],
      link: "/thesis",
      poster: "/media/archetype_banner_big.png"
    },
    {
      title: "Tech explorations",
      // partner: "-",
      info: "Side projects",
      date: "2021 – 24",
      media: ["/media/gpt_heart_square.jpg", "/media/thumbnails/timer_thumbnail.mp4", "/media/head.png", "/media/thumbnails/lines_thumbnail.mp4", "/media/thumbnails/colors_thumbnail.mp4", "/media/thumbnails/cupra_thumbnail.mp4", "/media/thumbnails/kinect_thumbnail.mp4", "/media/midi.jpg"],
      link: "/side-projects",
      poster: "/media/gpt_heart_square.jpg"
    },
    {
      title: "Integrations and demos ",
      partner: "Hapticlabs",
      info: "Hapticlabs",
      date: "2023",
      media: ["/media/thumbnails/hapticlabs_unity_thumbnail.mp4", "/media/hapticlabs_conference.jpg", "/media/thumbnails/hapticlabs_touchdesigner_thumbnail.mp4", "/media/thumbnails/hapticlabs_arduino_thumbnail.mp4", "/media/thumbnails/hapticlabs_protopie_thumbnail.mp4", "/media/thumbnails/hapticlabs_m5_thumbnail.mp4"],
      link: "/hapticlabs",
      poster: "/media/hapticlabs_unity_poster.jpeg"
    },
    {
      title: "Demos",
      partner: "ProtoPie",
      info: "ProtoPie",
      date: "2023",
      src: "/media/protopie_laundry_small.mp4",
      media: ["/media/thumbnails/protopie_laundry_thumbnail.mp4", "/media/thumbnails/protopie_json_thumbnail.mp4", "/media/thumbnails/protopie_dslr_thumbnail.mp4", "/media/thumbnails/protopie_adas_thumbnail.mp4"],
      link: "/protopie",
      poster: "/media/protopie_laundry_poster.jpg"
    },
    {
      title: "Tech explorations",
      partner: "Above",
      info: "Above Agency",
      date: "2022 – 23",
      media: ["/media/thumbnails/uwb_thumbnail.mp4", "/media/thumbnails/touchbar_thumbnail.mp4", "/media/thumbnails/bodystorming_thumbnail.mp4", "/media/thumbnails/trackpad_thumbnail.mp4"],
      link: "/above",
      poster: "/media/above_poster.png"
    },
    {
      // title: "Tiles – Connecting with your music collection",
      title: "Tiles",
      // partner: "Umeå Institute of Design",
      info: "Umeå Institute of Design",
      date: "2022",
      media: ["/media/thumbnails/tiles_thumbnail.mp4", "/media/thumbnails/tiles_slider_thumbnail.mp4", "/media/tiles/process.jpeg", "/media/thumbnails/tiles_cue_thumbnail.mp4"],
      link: "/tiles",
      poster: "/media/tiles_poster.jpg"
    },
    {
      // title: "Arch – Connecting remote doctors to their patients.",
      title: "Arch",
      // partner: "Umeå Institute of Design",
      info: "Umeå Institute of Design",
      date: "2021",
      media: ["/media/thumbnails/arch_thumbnail.mp4", "/media/thumbnails/archuxprototype_thumbnail.mp4", "/media/thumbnails/archinteraction_thumbnail.mp4", "/media/arch/setup.jpg"],
      link: "/arch",
      poster: "/media/arch_poster.jpg"
    },
    {
      title: "Vision i Circular",
      partner: "BMW Group",
      info: "BMW Group",
      date: "2021",
      media: ["/media/thumbnails/bmw_thumbnail.mp4", "/media/bmw/crystal.jpg", "/media/bmw/lamp.jpg", "/media/bmw/crystal_2.jpg"],
      link: "/bmw",
      poster: "/media/bmw/bmw.jpg"
    },
  ],
};


// for f in *.mp4 ; do ffmpeg -i "$f" -vf scale=-1:480 "thumnail_$f" ;  done