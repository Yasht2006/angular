editProfile(updatedUser: { email: string; password: string }): boolean {
  if (!this.currentUser) {
    return false; // No user is logged in
  }

  const users = this.getRegisteredUsers();

  // ❗ Disallow email if it's used by another user (different ID)
  const emailTakenByAnotherUser = users.some(
    u => u.email === updatedUser.email && u.id !== this.currentUser.id
  );

  if (emailTakenByAnotherUser) {
    return false; // Email is already taken by someone else
  }

  // Find and update the current user
  const userIndex = users.findIndex(u => u.id === this.currentUser.id);
  if (userIndex === -1) {
    return false; // User not found
  }

  users[userIndex].email = updatedUser.email;
  users[userIndex].password = updatedUser.password;

  this.saveRegisteredUsers(users);

  // Update localStorage and memory
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
