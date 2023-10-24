import React from "react";
import ReactDOM from "react-dom/client";

// Layout

// ** Header
//   --logo
//   -- nav iyems

// **Body
//   --search
//   -- Reastaurant container
//     -- restaurant cart
//         --Img
//         -- Name of Res, Star Rating, Cuisines, Delivery time
// **Footer
//  --copyright
//  --Links
//  --Address
//  --Contact

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const ReastaurantCard = (props) => {
//   const { resData } = props;

//   const {
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//     cloudinaryImageId,
//   } = resData?.info;

//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           cloudinaryImageId
//         }
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(",")}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };
// const resList = [
//   {
//     info: {
//       id: "90872",
//       name: "Burger King",
//       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       locality: "North Eye",
//       areaName: "Sector 74",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.2,
//       feeDetails: {
//         restaurantId: "90872",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5000,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5000,
//       },
//       parentId: "166",
//       avgRatingString: "4.2",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹129",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/burger-king-north-eye-sector-74-noida-1-90872",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "396440",
//       name: "Pizza Hut",
//       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       locality: "Amrapali Platinum Shopping Arcade",
//       areaName: "Sector 72",
//       costForTwo: "₹300 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 3.8,
//       feeDetails: {
//         restaurantId: "396440",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 4200,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4200,
//       },
//       parentId: "721",
//       avgRatingString: "3.8",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 20,
//         lastMileTravel: 0.7,
//         serviceability: "SERVICEABLE",
//         slaString: "20 mins",
//         lastMileTravelString: "0.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-noida-1-396440",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "147910",
//       name: "La Pino'z Pizza",
//       cloudinaryImageId: "ux1ryy9yqhrqwznhl3ju",
//       locality: "Mahagun Mart",
//       areaName: "Gaur City 2",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//       avgRating: 3.8,
//       feeDetails: {
//         restaurantId: "147910",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 7800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 7800,
//       },
//       parentId: "4961",
//       avgRatingString: "3.8",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 6.8,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "6.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-mahagun-mart-gaur-city-2-noida-1-147910",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "76663",
//       name: "Subway",
//       cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
//       locality: "Ach Market",
//       areaName: "Sector 72",
//       costForTwo: "₹350 for two",
//       cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
//       avgRating: 3.7,
//       feeDetails: {
//         restaurantId: "76663",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5800,
//       },
//       parentId: "2",
//       avgRatingString: "3.7",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 4.2,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "4.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 07:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/subway-ach-market-sector-72-noida-1-76663",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "356221",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Hazipur",
//       areaName: "Hajipur",
//       costForTwo: "₹450 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "356221",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 9600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 9600,
//       },
//       parentId: "547",
//       avgRatingString: "4.1",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 7.9,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "7.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 05:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "40% OFF",
//         subHeader: "UPTO ₹80",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kfc-hazipur-hajipur-noida-1-356221",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "408871",
//       name: "Nayi Dilli Ke Paranthe",
//       cloudinaryImageId: "zk259u3lq1nokmy2fego",
//       locality: "Hanuman Marg",
//       areaName: "Sector 73",
//       costForTwo: "₹250 for two",
//       cuisines: ["North Indian", "Indian", "Tandoor"],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "408871",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 4300,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4300,
//       },
//       parentId: "10616",
//       avgRatingString: "4.0",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 30,
//         lastMileTravel: 2.5,
//         serviceability: "SERVICEABLE",
//         slaString: "30 mins",
//         lastMileTravelString: "2.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/nayi-dilli-ke-paranthe-hanuman-marg-sector-73-noida-1-408871",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "405217",
//       name: "Call Chotu - Your Everyday Food Genie",
//       cloudinaryImageId: "fw8lo5clwgoywor5xvsv",
//       locality: "Hanuman Marg",
//       areaName: "Sector 73",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "North Indian",
//         "American",
//         "Mughlai",
//         "Biryani",
//         "Street Food",
//         "Pastas",
//         "Fast Food",
//       ],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "405217",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 4300,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4300,
//       },
//       parentId: "10614",
//       avgRatingString: "4.0",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 2.5,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "2.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/call-chotu-your-everyday-food-genie-hanuman-marg-sector-73-noida-1-405217",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "379407",
//       name: "Burgrill - The Win Win Burger",
//       cloudinaryImageId: "100543fba77434b148d9f30614826ca1",
//       locality: "Cleo Street",
//       areaName: "Chaukhandi",
//       costForTwo: "₹250 for two",
//       cuisines: [
//         "Burgers",
//         "Healthy Food",
//         "American",
//         "Salads",
//         "Beverages",
//         "Desserts",
//         "Snacks",
//       ],
//       avgRating: 4.2,
//       feeDetails: {
//         restaurantId: "379407",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 5100,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5100,
//       },
//       parentId: "302366",
//       avgRatingString: "4.2",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 21,
//         lastMileTravel: 3.7,
//         serviceability: "SERVICEABLE",
//         slaString: "21 mins",
//         lastMileTravelString: "3.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-cleo-street-chaukhandi-noida-1-379407",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "31178",
//       name: "Cold Rock Cafe",
//       cloudinaryImageId: "zvcnxmdmprylf0daot0o",
//       locality: "Ach Market",
//       areaName: "Sector 72",
//       costForTwo: "₹250 for two",
//       cuisines: ["Italian", "Snacks", "Chinese", "Ice Cream", "Desserts"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "31178",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 5900,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5900,
//       },
//       parentId: "7131",
//       avgRatingString: "4.1",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 24,
//         lastMileTravel: 4.2,
//         serviceability: "SERVICEABLE",
//         slaString: "24 mins",
//         lastMileTravelString: "4.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 05:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "30% OFF",
//         subHeader: "UPTO ₹75",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/cold-rock-cafe-ach-market-sector-72-noida-1-31178",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "326637",
//       name: "Khadak Singh Da Dhaba",
//       cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
//       locality: "Golf Course",
//       areaName: "Sector 37",
//       costForTwo: "₹300 for two",
//       cuisines: ["North Indian", "Mughlai", "Chinese", "Tandoor", "Indian"],
//       avgRating: 3.9,
//       feeDetails: {
//         restaurantId: "326637",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 10900,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 10900,
//       },
//       parentId: "13170",
//       avgRatingString: "3.9",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 32,
//         lastMileTravel: 9.2,
//         serviceability: "SERVICEABLE",
//         slaString: "32 mins",
//         lastMileTravelString: "9.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-golf-course-sector-37-noida-1-326637",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "43901",
//       name: "Faasos - Wraps & Rolls",
//       cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
//       locality: "Sector 66",
//       areaName: "Sector 59",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "Kebabs",
//         "Fast Food",
//         "Snacks",
//         "North Indian",
//         "American",
//         "Healthy Food",
//         "Desserts",
//         "Beverages",
//       ],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "43901",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 6800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 6800,
//       },
//       parentId: "21809",
//       avgRatingString: "4.0",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 31,
//         lastMileTravel: 5.9,
//         serviceability: "SERVICEABLE",
//         slaString: "31 mins",
//         lastMileTravelString: "5.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-sector-66-sector-59-noida-1-43901",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "68058",
//       name: "The Belgian Waffle Co.",
//       cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
//       locality: "Central Market",
//       areaName: "Sector 50",
//       costForTwo: "₹200 for two",
//       cuisines: ["Waffle", "Desserts", "Ice Cream"],
//       avgRating: 4.3,
//       veg: true,
//       feeDetails: {
//         restaurantId: "68058",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 7800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 7800,
//       },
//       parentId: "2233",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 30,
//         lastMileTravel: 6.8,
//         serviceability: "SERVICEABLE",
//         slaString: "30 mins",
//         lastMileTravelString: "6.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-central-market-sector-50-noida-1-68058",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "347943",
//       name: "Wakhra Swaad",
//       cloudinaryImageId: "06614d33a0adb57e8baf7c0f736937da",
//       locality: "Near Radha Public School",
//       areaName: "Gaur City 2",
//       costForTwo: "₹500 for two",
//       cuisines: ["North Indian", "Biryani", "Chinese", "Desserts"],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "347943",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 8400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 8400,
//       },
//       parentId: "6455",
//       avgRatingString: "4.0",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 36,
//         lastMileTravel: 6.9,
//         serviceability: "SERVICEABLE",
//         slaString: "36 mins",
//         lastMileTravelString: "6.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/wakhra-swaad-near-radha-public-school-gaur-city-2-noida-1-347943",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "198250",
//       name: "House of Chow",
//       cloudinaryImageId: "6e97ac8f5c89213610309ef1940afa05",
//       locality: "Hazipur",
//       areaName: "Hajipur",
//       costForTwo: "₹300 for two",
//       cuisines: ["Pan-Asian", "Chinese", "Thai", "Oriental"],
//       avgRating: 3.8,
//       feeDetails: {
//         restaurantId: "198250",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 10400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 10400,
//       },
//       parentId: "9064",
//       avgRatingString: "3.8",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 32,
//         lastMileTravel: 8.2,
//         serviceability: "SERVICEABLE",
//         slaString: "32 mins",
//         lastMileTravelString: "8.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "C",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/house-of-chow-hazipur-hajipur-noida-1-198250",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "121420",
//       name: "Nirula's",
//       cloudinaryImageId: "ra7tldgnbemmkes4dp9b",
//       locality: "D Block",
//       areaName: "Sector 51",
//       costForTwo: "₹500 for two",
//       cuisines: [
//         "Pizzas",
//         "Burgers",
//         "Ice Cream",
//         "North Indian",
//         "Fast Food",
//         "Asian",
//         "Pastas",
//         "Desserts",
//         "Beverages",
//         "Snacks",
//       ],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "121420",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 6600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 6600,
//       },
//       parentId: "1738",
//       avgRatingString: "4.1",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 4.5,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "4.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/nirulas-d-block-sector-51-noida-1-121420",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "31741",
//       name: "Wat-a-Burger! - India ka Burger",
//       cloudinaryImageId: "z47ky1psckku5uxmjbrr",
//       locality: "Central Market",
//       areaName: "Sector 50",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "Burgers",
//         "Fast Food",
//         "Continental",
//         "American",
//         "Beverages",
//         "Desserts",
//       ],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "31741",
//         fees: [
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "BASE_DISTANCE",
//             fee: 7900,
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 7900,
//       },
//       parentId: "384458",
//       avgRatingString: "4.1",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 6.8,
//         serviceability: "SERVICEABLE",
//         slaString: "28 mins",
//         lastMileTravelString: "6.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 05:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/wat-a-burger-india-ka-burger-central-market-sector-50-noida-1-31741",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "21128",
//       name: "Nazeer Foods",
//       cloudinaryImageId: "6aa38b251b1ee1662961a6dc19e41e95",
//       locality: "Block B1",
//       areaName: "Sector 50",
//       costForTwo: "₹400 for two",
//       cuisines: ["North Indian", "Biryani", "Mughlai", "Snacks"],
//       avgRating: 3.7,
//       feeDetails: {
//         restaurantId: "21128",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 8600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 8600,
//       },
//       parentId: "2351",
//       avgRatingString: "3.7",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 30,
//         lastMileTravel: 6.8,
//         serviceability: "SERVICEABLE",
//         slaString: "30 mins",
//         lastMileTravelString: "6.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/nazeer-foods-block-b1-sector-50-noida-1-21128",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "553993",
//       name: "The Brooklyn Creamery - Healthy Ice Cream",
//       cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
//       locality: "Panchsheel Square Mall",
//       areaName: "crossing republic",
//       costForTwo: "₹200 for two",
//       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
//       avgRating: 3.7,
//       veg: true,
//       feeDetails: {
//         restaurantId: "553993",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 8800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 8800,
//       },
//       parentId: "236673",
//       avgRatingString: "3.7",
//       totalRatingsString: "20+",
//       sla: {
//         deliveryTime: 35,
//         lastMileTravel: 8,
//         serviceability: "SERVICEABLE",
//         slaString: "35 mins",
//         lastMileTravelString: "8.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-26 00:00:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "brand",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "brand",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-panchsheel-square-mall-crossing-republic-noida-1-553993",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "355357",
//       name: "Grameen Kulfi",
//       cloudinaryImageId: "wnj8ppqwyza4ympg3bhu",
//       locality: "Golf Course",
//       areaName: "Sector 45",
//       costForTwo: "₹120 for two",
//       cuisines: ["Ice Cream", "Desserts"],
//       avgRating: 4.6,
//       veg: true,
//       feeDetails: {
//         restaurantId: "355357",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 10300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 10300,
//       },
//       parentId: "12175",
//       avgRatingString: "4.6",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 27,
//         lastMileTravel: 8.8,
//         serviceability: "SERVICEABLE",
//         slaString: "27 mins",
//         lastMileTravelString: "8.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/grameen-kulfi-golf-course-sector-45-noida-1-355357",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "30674",
//       name: "Berco's -If you love Chinese",
//       cloudinaryImageId: "kadjuzowfpzrqjnrlt5y",
//       locality: "Sector 104",
//       areaName: "Sector 104",
//       costForTwo: "₹500 for two",
//       cuisines: [
//         "Asian",
//         "Thai",
//         "Chinese",
//         "Seafood",
//         "Desserts",
//         "Beverages",
//       ],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "30674",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 10600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 10600,
//       },
//       parentId: "108",
//       avgRatingString: "4.0",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 33,
//         lastMileTravel: 8.2,
//         serviceability: "SERVICEABLE",
//         slaString: "33 mins",
//         lastMileTravelString: "8.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-10-20 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-sector-104-noida-1-30674",
//       type: "WEBLINK",
//     },
//   },
// ];

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         {/* <ReastaurantCard resData={resList[1]} />
//         <ReastaurantCard resData={resList[2]} />
//         <ReastaurantCard resData={resList[3]} />
//         <ReastaurantCard resData={resList[4]} />
//         <ReastaurantCard resData={resList[5]} />
//         <ReastaurantCard resData={resList[6]} />
//         <ReastaurantCard resData={resList[7]} />
//         <ReastaurantCard resData={resList[8]} />
//         <ReastaurantCard resData={resList[9]} />
//         <ReastaurantCard resData={resList[10]} /> */}
//         {resList.map((restaurant) => (
//           <ReastaurantCard key = {restaurant.info.id} resData = {restaurant}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
         <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const ReastaurantCard = (props) => { 
  const  { resData } = props;
  const  {
    name,
    cuisines,
    avgRating,
     costForTwo,
     deliveryTime,
     cloudinaryImageId,


  } = resData?.info;
  return (
    <div className="res-card">
      <img 
      className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>

    </div>
  )
}
const resList = [{
  "info": {
    "id": "90872",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "North Eye",
    "areaName": "Sector 74",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "90872",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3900
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3900
    },
    "parentId": "166",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "28 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 03:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹129"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-north-eye-sector-74-noida-1-90872",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "408871",
    "name": "Nayi Dilli Ke Paranthe",
    "cloudinaryImageId": "zk259u3lq1nokmy2fego",
    "locality": "Hanuman Marg",
    "areaName": "Sector 73",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Indian",
      "Tandoor"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "408871",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3400
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3400
    },
    "parentId": "10616",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "36 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/nayi-dilli-ke-paranthe-hanuman-marg-sector-73-noida-1-408871",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "394645",
    "name": "Blue Tokai Coffee Roasters",
    "cloudinaryImageId": "d6608954945e3221cc95ce0efa1dc581",
    "locality": "Hanuman Marg",
    "areaName": "Noida-Sec-73",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Cafe",
      "Beverages",
      "Continental",
      "Pizzas",
      "Bakery",
      "Desserts",
      "American"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      "restaurantId": "394645",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 4100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 4100
    },
    "parentId": "2682",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "23 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 20:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-hanuman-marg-noida-sec-73-noida-1-394645",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "348936",
    "name": "Hira Sweets",
    "cloudinaryImageId": "wtwhar7auvi9tqisguh9",
    "locality": "sapphire mall",
    "areaName": "Sector 4",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Chinese",
      "Continental",
      "Bakery",
      "Street Food",
      "Sweets",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 3.9,
    "veg": true,
    "feeDetails": {
      "restaurantId": "348936",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6500
    },
    "parentId": "5155",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 6.3,
      "serviceability": "SERVICEABLE",
      "slaString": "34 mins",
      "lastMileTravelString": "6.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hira-sweets-sapphire-mall-sector-4-noida-1-348936",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "142001",
    "name": "Salad Days",
    "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
    "locality": "Golf Course",
    "areaName": "Sector 45",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Salads"
    ],
    "avgRating": 4.5,
    "feeDetails": {
      "restaurantId": "142001",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 7900
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 7900
    },
    "parentId": "796",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 8.1,
      "serviceability": "SERVICEABLE",
      "slaString": "32 mins",
      "lastMileTravelString": "8.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/salad-days-golf-course-sector-45-noida-1-142001",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "45512",
    "name": "Theobroma",
    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
    "locality": "Morna",
    "areaName": "Sector 34",
    "costForTwo": "₹800 for two",
    "cuisines": [
      "Bakery",
      "Desserts"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      "restaurantId": "45512",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6500
    },
    "parentId": "1040",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 6.2,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "lastMileTravelString": "6.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-morna-sector-34-noida-1-45512",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "579096",
    "name": "EatFit",
    "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
    "locality": "C Block",
    "areaName": "Sector 63",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      "restaurantId": "579096",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 5700
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 5700
    },
    "parentId": "76139",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 6.4,
      "serviceability": "SERVICEABLE",
      "slaString": "28 mins",
      "lastMileTravelString": "6.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/eatfit-c-block-sector-63-noida-1-579096",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "32942",
    "name": "Bakingo",
    "cloudinaryImageId": "hsylepkuygu6k8mryapk",
    "locality": "B Block",
    "areaName": "Sector 64",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Bakery",
      "Desserts",
      "Beverages",
      "Snacks"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      "restaurantId": "32942",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6500
    },
    "parentId": "3818",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 6.4,
      "serviceability": "SERVICEABLE",
      "slaString": "30 mins",
      "lastMileTravelString": "6.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/bakingo-b-block-sector-64-noida-1-32942",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "432793",
    "name": "Paratha Box - Desi Punjabi Meals",
    "cloudinaryImageId": "bde8bfbd9092b770b4b6fb05232f51e1",
    "areaName": "Sector 49",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Punjabi",
      "Indian",
      "Home Food",
      "Beverages"
    ],
    "avgRating": 3.5,
    "feeDetails": {
      "restaurantId": "432793",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6400
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6400
    },
    "parentId": "306004",
    "avgRatingString": "3.5",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 7.5,
      "serviceability": "SERVICEABLE",
      "slaString": "36 mins",
      "lastMileTravelString": "7.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹399",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/paratha-box-desi-punjabi-meals-sector-49-noida-1-432793",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "340381",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Sector 4",
    "areaName": "Gaur City 1",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "340381",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6700
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6700
    },
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 6.6,
      "serviceability": "SERVICEABLE",
      "slaString": "29 mins",
      "lastMileTravelString": "6.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-sector-4-gaur-city-1-noida-1-340381",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "383492",
    "name": "Cafe Coffee Day",
    "cloudinaryImageId": "b925459fbc1faf59f02f7289eb079a74",
    "locality": "Sector 73",
    "areaName": "Sector 72",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food"
    ],
    "avgRating": 3.9,
    "feeDetails": {
      "restaurantId": "383492",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3300
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3300
    },
    "parentId": "1",
    "avgRatingString": "3.9",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "23 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-sector-73-sector-72-noida-1-383492",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "56484",
    "name": "Sagar Ratna",
    "cloudinaryImageId": "pucc16kmzjhof2kbilio",
    "locality": "Sundar Market",
    "areaName": "Sector 72",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Desserts"
    ],
    "avgRating": 3.8,
    "veg": true,
    "feeDetails": {
      "restaurantId": "56484",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3400
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3400
    },
    "parentId": "793",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/sagar-ratna-sundar-market-sector-72-noida-1-56484",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "175024",
    "name": "Keventers - Milkshakes & Desserts",
    "cloudinaryImageId": "f0e94c984813053f46c214f18ce73d59",
    "locality": "Sundar Shopping Complex",
    "areaName": "Sector 72",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Beverages",
      "Ice Cream",
      "Desserts",
      "Healthy Food"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
      "restaurantId": "175024",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3300
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3300
    },
    "parentId": "268997",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 05:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-sundar-shopping-complex-sector-72-noida-1-175024",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "322324",
    "name": "Biryani Blues",
    "cloudinaryImageId": "aid8xbkoxozzaxje8hap",
    "locality": "Sarfabad",
    "areaName": "Sector 72",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "Hyderabadi",
      "Lucknowi",
      "Kebabs",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      "restaurantId": "322324",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3900
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3900
    },
    "parentId": "13813",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 04:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/biryani-blues-sarfabad-sector-72-noida-1-322324",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "38937",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "ag4vpc5gaerk7hxnmp5d",
    "locality": "Rg Residency",
    "areaName": "Sector 72",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "38937",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3400
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3400
    },
    "parentId": "2456",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 25,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-25 02:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-rg-residency-sector-72-noida-1-38937",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "62991",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
    "locality": "Bharat Complex",
    "areaName": "Sector 59",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Punjabi",
      "Healthy Food",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      "restaurantId": "62991",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 5100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 5100
    },
    "parentId": "4925",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 5.9,
      "serviceability": "SERVICEABLE",
      "slaString": "42 mins",
      "lastMileTravelString": "5.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-24 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "10% OFF",
      "subHeader": "ABOVE ₹1500",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bharat-complex-sector-59-noida-1-62991",
    "type": "WEBLINK"
  }
}];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) =>
        <ReastaurantCard key = {restaurant.info.id} resData = {restaurant} />)}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
   <div className="app">
    <Header />
    <Body />
   </div>
   
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 