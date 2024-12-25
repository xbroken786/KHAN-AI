const { cmd } = require("../command");
const fetch = require("node-fetch");

cmd(
  {
    pattern: "gitclone",
    alias: ["git"],
    desc: "Download GitHub repository as a zip file.",
    react: "📦",
    category: "downloader",
    filename: __filename,
  },
  async (bot, message, chat, { from, quoted, args, reply }) => {
    if (!args[0]) {
      return reply(
        "Where is the GitHub link?\n\nExample:\n.gitclone https://github.com/JawadYTX/JawadYTX"
      );
    }

    if (!/^(https:\/\/)?github\.com\/.+/.test(args[0])) {
      return reply("⚠️ Invalid GitHub link.");
    }

    try {
      // Extract GitHub username and repository name
      let githubRegex = /github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?/i;
      let [_, username, repoName] = args[0].match(githubRegex) || [];

      if (!username || !repoName) {
        throw new Error("Invalid GitHub URL.");
      }

      // Construct the GitHub API URL
      let downloadUrl = `https://api.github.com/repos/${username}/${repoName}/zipball`;

      // Check if the repository exists
      let response = await fetch(downloadUrl, { method: "HEAD" });
      if (!response.ok) throw new Error("Repository not found.");

      // Extract filename from headers
      let contentDisposition = response.headers.get("content-disposition");
      let filename = contentDisposition
        ? contentDisposition.match(/filename=(.*)/)[1]
        : `${repoName}.zip`;

      // Notify user
      reply(
        `*📥 DOWNLOADING REPOSITORY...*\n\n*REPOSITORY:* ${username}/${repoName}\n*FILENAME:* ${filename}\n\n> *© Powered By JawadTechX*`
      );

      // Send the repository zip file
      await bot.sendMessage(
        from,
        {
          document: {
            url: downloadUrl,
          },
          fileName: `${filename}.zip`,
          mimetype: "application/zip",
          contextInfo: {
            mentionedJid: [message.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363354023106228@newsletter",
              newsletterName: "JawadTechX",
              serverMessageId: 143,
            },
          },
        },
        { quoted: message }
      );
    } catch (error) {
      console.error(error);
      reply("❌ Failed to download the repository. Please try again later.");
    }
  }
);
