type Prompt = {
    category: string
    titles: string[];
    prompts: string[];
    name:string;
}

  const prompts: Prompt[] = [
    {
      category: "Businesses",
      titles: [
        "Discover Nearby Businesses",
        "Businesses Around You",
        "Highly Rated Businesses",
        "Local Business Directory",
        "Businesses with Stellar Reviews"
      ],
      prompts: [
        "Explore co-working spaces located close to me",
        "Search for organic grocery stores operating in my area",
        "Search for highly rated coffee shops operating in my vicinity",
        "Locate businesses near me that specialize in eco-friendly products",
        "Locate businesses near me that have received excellent reviews"
      ],
      name:"fetch_businesses"
    },
    {
      category: "Restaurant/Food Services",
      titles: [
        "Dine Nearby",
        "Culinary Delights Around You",
        "Top Culinary Spots",
        "Local Dining Options",
        "Vegetarian/Vegan Friendly Eateries"
      ],
      prompts: [
        "Provide a list of restaurants and eateries located close to me for a quick bite",
        "Discover Italian restaurants located close to me",
        "Show me top culinary restaurants near me that are highly recommended by locals",
        "Provide a list of local restaurants suitable for a family dinner",
        "Locate restaurants near me that offer vegetarian and vegan options"
      ],
      name:"fetch_restaurants"
    },
    {
      category: "Local Services",
      titles: [
        "Services at Your Doorstep",
        "Local Service Providers",
        "Top Service Recommendations",
        "Directory of Local Services",
        "Trusted Local Services"
      ],
      prompts: [
        "Find home cleaning services that use green products",
        "Search for dog walkers operating in my vicinity",
        "Provide a list of landscapers available in my area",
        "Locate electricians near me with top-notch service ratings",
        "Provide a directory of well rated services available in my area",
      ],
      name:"fetch_local_services"
    },
    {
      category: "Entertainment",
      titles: [
        "Entertainment Hotspots",
        "Nightlife Adventures",
        "Top Bars and Clubs",
        "Local Entertainment Guide"
      ],
      prompts: [
        "Discover entertainment options for a fun-filled evening near me",
        "Search for nightlife spots to enjoy with friends in my area",
        "Show me bars and clubs near me that are popular on weekends",
        "Provide a guide to local entertainment and cultural events",
      ],
      name:"fetch_entertainment"
    },
    {
      category: "Health & Wellness",
      titles: [
        "Wellness Centers Nearby",
        "Fitness and Gym Options",
        "Top Yoga and Meditation Studios",
        "Holistic Wellness Centers",
        "Health and Wellness Workshops"
      ],
      prompts: [
        "Find health and wellness centers near me for holistic care",
        "Search for gyms and fitness centers in my area with modern equipment",
        "Show me yoga studios near me that offer both beginner and advanced classes",
        "Provide a list of wellness centers that focus on holistic health",
        "Locate workshops or seminars near me focused on health and well-being"
      ],
      name:"fetch_health_wellness"
    },
    {
      category: "Shopping & Retail",
      titles: [
        "Shopping Destinations",
        "Retail Therapy Spots",
        "Fashion and Clothing Stores",
        "Local Artisanal Shops",
        "Bookstores and Reading Spaces"
      ],
      prompts: [
        "Discover shopping centers near me for a day of retail therapy",
        "Search for retail stores in my area offering seasonal discounts",
        "Show me clothing stores near me that offer both casual and formal wear",
        "Find local artisanal shops or boutiques with unique products",
      ],
      name:"fetch_shopping_retail"
    }
]


export default prompts