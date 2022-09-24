# React Native project with redux toolkit
## Project setup
Clone the repository to the working directory of local machine.
for  more details - [official docs](https://reactnative.dev/docs/getting-started) 
- Install the node modules
```yarn install```
or
```npm install```
- Command run in the virtual machine or for real mobile device connect with usb cable and start the debugger
``` npx react-native run-android```

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech
The application contains two tabs. 
1. First Tab: Users 
2. Second Tab: Bookmarked Users 
Features implemented: 
	-	List of Users from above API 
	-	Show user login name and the circular image from avatar_url 
	-	Load more with the help of pagination 
	-	Pull-to-refresh to refresh the page 
	-	User should be bookmarked/unbookmarked from the list item 
	-	Display the bookmarked users in Second Tab (No API call /pagination required here) 
	-	From the second Tab, We can deselect the user. 
(Users selection/deselection should reflect properly in both listings) 
	-	In both the tabs, add a feature to search the users based on their name case insensitively. (Search should happen for data already loaded. No network call needed for it). 
	-	Bookmarked users should be accessible in offline mode or across the app instances 
Considerations: 
	-	Used Functional components and hooks
	-	Used reusable components wherever possible
	-	Followed all the best practices
	-	Use Redux and redux persist for state management and storage

