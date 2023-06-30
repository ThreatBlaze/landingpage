import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>{" "}
        <title>ThreatBlaze | Under Construction</title>{" "}
        <meta name="description" content="ThreatBlaze | Under Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container maxWidth="sm">
            <Box textAlign="center" my={4}>
              <Image
                src="/threatblaze-logo.svg"
                alt="Under Construction"
                height={120}
                width={120}
              />
              <Typography variant="h4" component="h1" mt={2} fontWeight="bold">
                ThreatBlaze
              </Typography>
              <Typography variant="body1" mt={2}>
                🚧 We&apos;re working on something awesome! 🚧
              </Typography>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
}
