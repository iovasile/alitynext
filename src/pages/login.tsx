import type { NextPage } from "next";
import Head from "next/head";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must be at least 8 characters" : null,
    },
  });

  return (
    <>
      <Head>
        <title>Ality Next - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex justify-center items-center">
        <Box sx={{ maxWidth: 420, width: "80%" }}>
          <form
            onSubmit={form.onSubmit((values) => router.replace("/dashboard"))}
          >
            <TextInput
              required
              label="Email"
              type="email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <TextInput
              required
              label="Password"
              type="password"
              placeholder="your safe password"
              {...form.getInputProps("password")}
            />

            <Group position="right" mt="md">
              <Button type="submit" color="dark" variant="subtle">
                Login
              </Button>
            </Group>
          </form>
        </Box>
      </main>
    </>
  );
};

export default Login;
