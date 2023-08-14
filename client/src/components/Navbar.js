import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "@/redux/reducerSlices/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function PrimarySearchAppBar({
	searchInput,
	onSearchInputChange,
}) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem>
				<Link href="/medical/profile">Profile</Link>
			</MenuItem>
			<MenuItem onClick={() => dispatch(handleLogout())}>Sign Out</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{/* <MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem> */}
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					//aria-controls="primary-search-account-menu"
					aria-controls={menuId}
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>sign in</p>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
						<List className=" w-40 md:p-4 md:w-48 ">
							<ListItem className="hover:bg-gray-200">
								<Link href="/" className="flex align-center justify-between  ">
									<ListItemText primary="Home" className=" md:w-20 w-20 p-2" />
									<ListItemIcon className="p-2">
										<HomeIcon />
									</ListItemIcon>
								</Link>
							</ListItem>
							<ListItem true className="hover:bg-gray-200">
								<Link href="/admin/register" className="flex align-center ">
									<ListItemText
										primary="Setting"
										className="md:w-20 w-20 p-2"
									/>
									<ListItemIcon className="p-2">
										<SettingsIcon />
									</ListItemIcon>
								</Link>
							</ListItem>
							<ListItem true className="hover:bg-gray-200">
								<button
									className="flex align-center ml-0 "
									onClick={() => dispatch(handleLogout())}
								>
									<ListItemText primary="Log Out" className="md:w-20 w-20" />
									<ListItemIcon className="p-1 ml-1">
										<LogoutIcon />
									</ListItemIcon>
								</button>
							</ListItem>
						</List>
					</Drawer>
					<Link href="/">
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							Medical-app
						</Typography>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							value={searchInput}
							onChange={(e) => onSearchInputChange(e.target.value)}
						/>
					</Search>
					<Link
						href="/medical/addData"
						className="flex bg-indigo-600 p-2 hover:bg-indigo-400 active:bg-indigo-600 rounded-md"
					>
						<p>Create New</p>
						<AddIcon />
					</Link>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{/* <IconButton
							size="large"
							aria-label="show 4 new mails"
							color="inherit"
						>
							<Badge badgeContent={4} color="error">
								<MailIcon />
							</Badge>
						</IconButton> */}
						{/* <IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<Badge badgeContent={17} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton> */}

						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							//aria-controls={mobileMenuId}
							aria-controls={menuId}
							aria-haspopup="true"
							//onClick={handleMobileMenuOpen}
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
}
