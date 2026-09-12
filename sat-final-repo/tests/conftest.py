"""pytest configuration and shared fixtures."""
import sys
import os

# Ensure backend is importable from repo root
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import pytest
from backend.schemas.response import QueryRequest


@pytest.fixture
def basic_request():
    return QueryRequest(question="What type of vegetation is visible in the image?")


@pytest.fixture
def change_request():
    return QueryRequest(
        question="How much flood damage occurred between before and after the cyclone?",
    )


@pytest.fixture
def sar_optical_request():
    return QueryRequest(
        question="Compare the SAR backscatter with the optical imagery to identify urban zones",
    )
