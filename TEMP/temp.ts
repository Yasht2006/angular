editProfile(updatedUser: { email: string; password: string }): boolean {
  if (!this.currentUser) {
    return false; // No user logged in
  }

  const users = this.getRegisteredUsers();

  // Check if the email is used by another user
  const emailTaken = users.some(u => u.email === updatedUser.email && u.id !== this.currentUser.id);
  if (emailTaken) {
    return false; // Email already in use by another user
  }

  // Update the user's information
  const userIndex = users.findIndex(u => u.id === this.currentUser.id);
  if (userIndex === -1) {
    return false; // User not found
  }

  users[userIndex].email = updatedUser.email;
  users[userIndex].password = updatedUser.password;

  this.saveRegisteredUsers(users);

  // Update current user in local storage and service
  this.currentUser = users[userIndex];
  localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

  return true;
}


const updatedUser = {
  email: this.editForm.value.email,
  password: this.editForm.value.password
};

if (this.authService.editProfile(updatedUser)) {
  alert('Profile updated successfully!');
} else {
  alert('Failed to update profile. Email might already be taken.');
}
