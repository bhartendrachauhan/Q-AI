import { Box, Grid, IconButton, Typography } from "@mui/material";
import { LinkedIn, GitHub, DynamicForm } from "@mui/icons-material";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{ bgcolor: "'#f5f5f5'", textAlign: "center", py: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "2px solid #c7c7c7",
          p: 1,
          // justifyContent: { lg: "space-between" },
        }}
      >
        <Box sx={{ ml: 8, display: { lg: "block" } }}>
          <Typography variant="body1" color="textSecondary">
            Get connected with us on social networks :
          </Typography>
        </Box>
        <Box
          sx={{
            mr: 8,
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "left",
          }}
        >
          <Box sx={{ mr: 3 }}>
            <Link
              href="https://github.com/bhartendrachauhan"
              target="_blank"
              color="inherit">
              <GitHub sx={{ color: '#6B6B6B' }}/>
            </Link>
          </Box>
          <Box sx={{ mr: 3 }}>
            <Link
              href="www.linkedin.com/in/bhartendra-singh-chauhan-64662a165/"
              color="inherit"
              target="_blank"
            >
            <LinkedIn  sx={{ color: '#6B6B6B' }}/>
            </Link>
          </Box>
          <Box sx={{ mr: 3 }}>
            <Link
              href="https://github.com/Zahra6653"
            
              target="_blank"
            >
              
              <GitHub sx={{ color: '#6B6B6B' }}/>
            </Link>
          </Box>
          <Box sx={{ mr: 3 }}>
            <Link
              href="https://www.linkedin.com/in/zahra-saktiwala-3a59b6184/"
              
              target="_blank"
            >
              <LinkedIn  sx={{ color: '#6B6B6B' }}/>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mx: 6, pt: 2, textAlign: { xs: "center", md: "left" } }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography color="textSecondary"
              variant="subtitle1"
              component="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                md: "flex-start",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              <DynamicForm sx={{ mr: 1 }} />
              Q&AI
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A community forum integrated with Artificial Intelligence
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <Typography color="textSecondary"
              variant="subtitle1"
              component="h6"
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: bhartendrachauhan@gmail.com
              <br />
              Phone: +91 73891 23012
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: zahrasaktiwala@gmail.com
              <br />
              Phone: +91 70009 67225
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
