---
sidebar_position: 99
---

# Troubleshooting

Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via [Discord](https://discord.gg/NEdNen2dSu). Alternatively, you may also directly [email our company address](mailto:contact@phalco.de) if the issue is confidential.

## Common Problems and Solutions

### Incorrect Game Mapping

- Refer to [this](./client-docs/how-to-use.md#modifying-games) for instructions on how to modify games.

### Unable to Connect to Server / 500 Internal Server Error

- Review your server log for error details.
- Examine the error log of the client app.
- Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL.
- If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. [See here](./server-docs/configuration.md) for more information.

### Server fails to save images / create SQLITE Database / index games

This is most probably a permissions issue due to the fact that gamevault runs as a non-root user (1000:1000) by default for security purposes.

Either make sure this user has permissions to read/write to the folders you map in as volumes, or run GameVault with a user that has using the `PUID` & `PGID` environment variables.

### User Registration Activation

- Find instructions on granting privileges to your first user in [this](./server-docs/user-management.md#initial-setup) guide.

### Games Not Appearing in the List

- Clear the Searchbox and Press the Search button
- Check the server log and index logs for any errors. It's likely that [your file names are incorrect](./server-docs/structure.md).
- Check the Filesystem Permissions

### Missing Box Arts

- Verify if [the Google API is disabled in your server configuration](./server-docs/configuration.md).

### Lack of Metadata in Games

- If you haven't set up RAWG yet, follow [these steps](./server-docs/indexing-and-metadata.md#rawg-api-key).
- Monitor your server logs.
- Check the RAWG-API Dashboard for any requests associated with your API Key.
- Verify if [the RAWG API is disabled in your server configuration](./server-docs/configuration.md).
- Verify if [your file names are correct](./server-docs/structure.md)
- Verify if you accidently marked your game as `(NC)` (No Cache Flag)

### Forgot my Admin Password

- Refer to [this](./server-docs/user-management.md#recovering-access-to-admin-user) for instructions on how to regain access to your admin account.

### GameVault Backend: SIGILL / Illegal Instruction (Core Dumped)

Phew. Tough one. Apologies, but your CPU is too dated to run the official gamevault-backend image. The reason is that [our image Compression library "sharp" relies on another library called "libvips," which only functions on processors built after ~2011](https://github.com/lovell/sharp/issues/3743), supporting the AVX and SSE 4.2 Instruction set. We've already encountered a couple users facing this issue. Despite countless hours of analysis and debugging, we attempted almost everything to enable the code to run on both older and newer hardware, even considering switching to another library. Unfortunately, we found ourselves at a dilemma. We had to choose between removing server-side image compression for everyone or officially discontinuing support for older hardware. We conducted a poll, and the results were clear: official support for old hardware should be discontinued. We reached out to the community, urging them to maintain an active fork of gamevault backend with compression completely removed. You may find one [here](contribute.md#gamevault-backend).

- In case you manage such a community fork that addresses this issue, we'd gladly promote it [here](contribute.md#gamevault-backend).
- If you discover a solution that works for both older and newer hardware, we welcome a PR for this problem.

Until then, we're constrained by our current circumstances. Sorry.

### Game Downloads are slow

- Make sure the Clients Bandwidth Speed Limit is unset (0)
- Make sure the Servers Bandwidth Speed Limit is unset (`SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS`)
- Restart your Client and Server
- If your server is in your LAN, make sure you don't mistakenly access it from WAN
- Check your middle-mans: Proxies, VPNs and older Network Hardware could all affect the download speeds.