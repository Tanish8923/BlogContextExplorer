## Installation

1. **Clone the repository**:
   
   git clone https://github.com/your-username/project-name.git

2. **Navigate to the project directory**:
 
   cd project-name

3. **Install dependencies**:

    npm install

4. **Run the app**:

    npm start


# ✨ Exploring React's Context API with BlogContextExplorer! ✨

Thrilled to share my latest React project — **BlogContextExplorer**, where I delved into the power of Context API and built a responsive, feature-packed blog application! 🚀

## 🛠️ Project Highlights:

### 🔹 Context API Integration
- Created an **AppContext** to manage global states like `loading`, `posts`, `page`, `totalPages`, `mode` (Dark/Light), and their respective setters.
- Wrapped the application in **AppContextProvider** to provide context across all components.

### 🔹 Custom Functions
- Implemented `fetchBlogPosts` for API calls and `handlePageChange` for seamless pagination management.

### 🔹 Dark & Light Mode Toggle
- Added functionality to switch between **Dark** and **Light** modes, offering a personalized user experience.

### 🔹 Component Breakdown
- **Header**: Displays the title and Dark/Light mode toggle.
- **Blogs**: Dynamically renders blog posts fetched from the API.
- **Pagination**:
  - Displays the current page and total pages.
  - Includes **Next** and **Previous** buttons for navigation.
  - Handles edge cases: **Previous** button is hidden on the first page, and **Next** button is hidden on the last page.
- **Spinner**: Enhances user experience by showing a loader while fetching data.

### 🔹 Responsive Design with Tailwind CSS
- Crafted a clean and responsive UI using **Tailwind CSS**, ensuring seamless accessibility across devices.

## 🔍 Key Learnings:
- **Context API** simplifies state sharing across components, eliminating prop drilling.
- Leveraging **useContext** hook enhances component efficiency by accessing shared state directly.
- Responsiveness and user-centric features like spinners and pagination greatly improve the overall UX.

Building **BlogContextExplorer** was an enriching experience, sharpening my understanding of React's Context API and responsive design principles. 🚀

🔗 **Check out the project on GitHub**: [https://github.com/Tanish8923/BlogContextExplorer](https://github.com/Tanish8923/BlogContextExplorer)

---

#React #ContextAPI #ResponsiveDesign #FrontendDevelopment #TailwindCSS #ProjectBasedLearning
