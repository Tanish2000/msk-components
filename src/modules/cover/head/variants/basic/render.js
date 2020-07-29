import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex'
  },
  coverDiv: {
    paddingTop: 40,
    width: '100%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left'
  },
  name: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  designation: {
    margin: 0
  }
});

const Basic = ({ theme, name, designation }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <div
        style={{
          ...styles.coverDiv,
          backgroundColor: theme.value.color,
          color: theme.value.contrast
        }}
      >
        <div style={styles.detailsWrapper}>
          <div style={styles.name}>{name.value}</div>
          <h3 style={styles.designation}>{designation.value}</h3>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;
