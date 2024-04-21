# Project Title

## Overview

This project is designed to interact with a messaging system using an event mesh architecture. It consists of three main components, each contained within its own directory, that handle different aspects of the messaging system. These include event messaging, HTTP management for event mesh, and message consumption via webhooks.

## Directory Structure

### 1. `cap-event-mesh`

This directory contains a CAP (Cloud Application Programming) project that implements services for sending and receiving messages through an `messaging-enterprise` (event mesh). It serves as the core interface for interacting with the messaging system.

**Contents:**
- CAP service models and handlers.
- Configuration for connecting and authenticating with the messaging service.

### 2. `event-mesh-http-manager`

This folder contains scripts and utilities for managing the event mesh. It includes tools for obtaining authorization tokens and managing queues, topics, and messages within the event mesh environment.

**Subdirectories:**
- `auth`: Scripts for obtaining and managing authentication tokens.
- `queues`: Tools and scripts for queue management.
- `topics`: Utilities for topic management.
- `messages`: Scripts for message handling and manipulation.

### 3. `event-mesh-consumer`

The `event-mesh-consumer` directory houses a backend server built on Express.js, designed to consume messages from the event mesh via webhooks.

**Features:**
- Webhook setup for receiving messages.
- Processing and response logic for incoming messages.
- Configuration settings for connecting to the event mesh.

## Author
dzianis.antanouski@leverx.com
