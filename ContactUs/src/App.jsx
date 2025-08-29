import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import {
Box,
Button,
CircularProgress,
Divider,
Grid,
Link,
Paper,
Stack,
TextField,
Typography,
} from "@mui/material";
import React, { useState } from "react";

const footerLinks = [
{ text: "About", left: true },
{ text: "Privacy Policy", left: false },
{ text: "Careers", left: true },
{ text: "Terms Of Service", left: false },
{ text: "Press", left: true },
{ text: "Cookie Policy", left: false },
];

const ContactPage = () => {
const [formData, setFormData] = useState({
fullName: "",
company: "",
email: "",
address: "",
note: "",
});
const [loading, setLoading] = useState(false);

const handleInputChange = (field) => (event) => {
setFormData((prev) => ({ ...prev, [field]: event.target.value }));
};

const handleSubmit = async () => {
setLoading(true);
console.log("Form submitted:", formData);
await new Promise((resolve) => setTimeout(resolve, 2000));
setLoading(false);
};

return (
<Box
sx={{
minHeight: "100vh",
backgroundColor: '#06235d',
p: { xs: 2, md: 4 },
display: "flex",
alignItems: "center",
justifyContent: "center",
// Add these two lines to prevent horizontal overflow
width: '100vw',
overflowX: 'hidden',
}}
>
<Box sx={{ width: "100%" }}>
{/* Main Content Grid */}
<Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 4, justifyContent: 'left' }}>
{/* Left Column */}
<Grid item xs={12} md={6} sx={{ color: "white" }}>
<Stack
spacing={4}
sx={{
height: "100%",
justifyContent: "center",
textAlign: { xs: "center", md: "left" },
}}
>
<Typography
variant="h1"
sx={{
fontWeight: 300,
fontSize: { xs: "48px", md: "64px" },
}}
>
CONTACT US
</Typography>
<Typography
variant="h6"
sx={{
fontWeight: 500,
maxWidth: 412,
mx: { xs: "auto", md: 0 },
}}
>
Some fluff about please reach out to us and stuff.
</Typography>
<Stack
direction="row"
spacing={2}
sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
>
<Link href="#" color="inherit">
<LinkedIn sx={{ fontSize: 58 }} />
</Link>
<Link href="#" color="inherit">
<Twitter sx={{ fontSize: 58 }} />
</Link>
</Stack>
</Stack>
</Grid>

{/* Right Column (Form) */}
<Grid item xs={12} md={6}>
<Paper
elevation={0}
sx={{
backgroundColor: "#f5fff3",
borderRadius: "48px",
p: { xs: 3, md: 5 },
}}
>
<Typography
variant="h4"
sx={{
fontWeight: 600,
color: "#0c44b8",
textAlign: "center",
mb: 5,
}}
>
GET IN TOUCH WITH US!
</Typography>
<Stack component="form" spacing={3}>
<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
<TextField label="Full name" fullWidth />
<TextField label="Company" fullWidth />
</Stack>
<TextField label="Email" type="email" fullWidth />
<TextField label="Address" fullWidth />
<TextField label="Note" multiline rows={4} fullWidth />
<Box>
<Button
variant="contained"
onClick={handleSubmit}
disabled={loading}
sx={{
backgroundColor: "#06235d",
borderRadius: "16px",
textTransform: "none",
fontWeight: 700,
px: 4,
py: 1.5,
}}
>
{loading ? <CircularProgress size={24} /> : "Send Message"}
</Button>
</Box>
</Stack>
</Paper>
</Grid>
</Grid>

{/* Footer Section */}
<Divider sx={{ borderColor: "white", mb: 4 }} />
<Grid component="footer" container spacing={2}>
{footerLinks
.filter((link) => link.left)
.map((link) => (
<Grid item xs={12} sm={6} md={2} key={link.text}>
<Link
href="#"
underline="hover"
sx={{ color: "white", fontSize: "1.2rem" }}
>
{link.text}
</Link>
</Grid>
))}
</Grid>
</Box>
</Box>
);
};

export default ContactPage;