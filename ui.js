"use strict";
const React = require("react");
const { Box } = require("ink");
const TextInput = require("ink-text-input").default;

const App = () => {
   const [username, setUsername] = React.useState("");
  return (
    <Box>
      <TextInput
        placeholder="Enter username..."
        value={username}
        onSubmit={setUsername}
      />
    </Box>
  );
};
module.exports = App;